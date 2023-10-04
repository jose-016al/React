import { useEffect, useState } from 'react';
import avatar from '../../assets/img/user.png';
import { GetProfile } from '../../helpers/GetProfile';
import { Link, useParams } from 'react-router-dom';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { useAuth } from '../../hooks/useAuth';
import { PublicationList } from '../publications/PublicationList';

export const Profile = () => {

    const { auth } = useAuth();
    const { userid } = useParams();
    const [profile, setProfile] = useState({});
    const [iFollow, setIFollow] = useState(false);
    const [counters, setCounters] = useState({});
    const [publications, setPublications] = useState([]);
    const [page, setPage] = useState(1);
    const [more, setMore] = useState(true);

    useEffect(() => {
        getDataUser();
        getCounter();
        getPublications(1, true);
    }, []);

    useEffect(() => {
        getDataUser();
        getCounter();
        setMore(true);
        getPublications(1, true);
    }, [userid]);

    const getDataUser = async () => {
        let dataUser = await GetProfile(userid, setProfile);
        if (dataUser.following && dataUser.following._id) setIFollow(true);
    }

    const getCounter = async () => {
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}user/counters/${userid}`, "GET", undefined, false, token);
        setCounters(data);
    }

    const follow = async (id) => {
        /* Peticion al backend para guardar el follow */
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}follow/save`, "POST", { followed: id }, false, token);

        if (data.status === 'success') {
            setIFollow(true);
        }
    }

    const unfollow = async (id) => {
        /* Peticion al backend para guardar el unfollow */
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}follow/unfollow/${id}`, "DELETE", undefined, false, token);

        if (data.status === 'success') {
            setIFollow(false);
        }
    }

    const getPublications = async (nextPage = 1, newProfile = false) => {
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}publication/user/${userid}/${nextPage}`, "GET", undefined, false, token);
        if (data.status == "success") {
            let newPublications = data.publications;
            if (!newProfile && publications.length >= 1) {
                newPublications = [...publications, ...data.publications];
            }
            if (newProfile) {
                newPublications = data.publications;
                setMore(true);
                setPage(1);
            }
            setPublications(newPublications);
        }

        /* Paginacion */
        if (!newProfile && publications.length >= (data.total - data.publications.length)) {
            setMore(false);
        }

        if (data.pages <= 1) {
            setMore(false);
        }
    }

    return (
        <>
            <header className="aside__profile-info">
                <div className="profile-info__general-info">
                    <div className="general-info__container-avatar">
                        {profile.image != "default.png" && <img src={`${Global.url}user/avatar/${profile.image}`} className="container-avatar__img" alt="Foto de perfil" />}
                        {profile.image == "default.png" && <img src={avatar} className="container-avatar__img" alt="Foto de perfil" />}
                    </div>
                    <div className="general-info__container-names">
                        <div className="container-names__name">
                            <h1>{profile.name} {profile.surname}</h1>
                            {auth._id != userid &&
                                (iFollow ?
                                    <button onClick={() => unfollow(userid)} className="content__button post__button content__button--right">Dejar de seguir</button>
                                    : <button onClick={() => follow(userid)} className="content__button content__button--right">Seguir</button>
                                )}
                        </div>
                        <h2 className="container-names__nickname">{profile.nick}</h2>
                        <p>{profile.bio}</p>
                    </div>
                </div>
                <div className="profile-info__stats">
                    <div className="stats__following">
                        <Link to={`/social/following/${userid}`} className="following__link">
                            <span className="following__title">Siguiendo</span>
                            <span className="following__number">{counters.following}</span>
                        </Link>
                    </div>
                    <div className="stats__following">
                        <Link to={`/social/followers/${userid}`} className="following__link">
                            <span className="following__title">Seguidores</span>
                            <span className="following__number">{counters.followed}</span>
                        </Link>
                    </div>
                    <div className="stats__following">
                        <Link to={`/social/profile/${userid}`} className="following__link">
                            <span className="following__title">Publicaciones</span>
                            <span className="following__number">{counters.publications}</span>
                        </Link>
                    </div>
                </div>
            </header>

            <PublicationList 
                publications={publications}
                getPublications={getPublications}
                page={page}
                setPage={setPage}
                more={more}
                setMore={setMore}
            />
            <br />
        </>
    )
}
