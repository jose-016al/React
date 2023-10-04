import { Link } from 'react-router-dom';
import avatar from '../../assets/img/user.png';
import { Global } from '../../helpers/Global';
import { Petition } from '../../helpers/Petition';
import { useAuth } from '../../hooks/useAuth';
import ReactTimeAgo from 'react-time-ago';

export const ListUser = ({ users, getUsers, following, setFollowing, page, setPage, loading, more }) => {

    const { auth } = useAuth();

    const nextPage = () => {
        let next = page + 1;
        setPage(next);
        getUsers(next);
    }

    const follow = async (id) => {
        /* Peticion al backend para guardar el follow */
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}follow/save`, "POST", { followed: id }, false, token);

        if (data.status === 'success') {
            setFollowing([...following, id]);
        }
    }

    const unfollow = async (id) => {
        /* Peticion al backend para guardar el unfollow */
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}follow/unfollow/${id}`, "DELETE", undefined, false, token);

        if (data.status === 'success') {
            setFollowing(following.filter(followingUserId => id != followingUserId));
        }
    }

    return (
        <>
            <div className="content__posts">
                {loading ? "Cargando..." : ""}

                {users.map(user => {
                    return (
                        <article key={user._id} className="posts__post">
                            <div className="post__container">
                                <div className="post__image-user">
                                    <Link to={`/social/profile/${user._id}`} className="post__image-link">
                                        {user.image != "default.png" && <img src={`${Global.url}user/avatar/${user.image}`} className="post__user-image" alt="Foto de perfil" />}
                                        {user.image == "default.png" && <img src={avatar} className="post__user-image" alt="Foto de perfil" />}
                                    </Link>
                                </div>
                                <div className="post__body">
                                    <div className="post__user-info">
                                        <Link to={`/social/profile/${user._id}`} className="user-info__name">{user.name} {user.surname}</Link>
                                        <span className="user-info__divider"> | </span>
                                        <Link to={`/social/profile/${user._id}`} className="user-info__create-date">
                                            <ReactTimeAgo date={user.created_at} locale='es-ES' />
                                        </Link>
                                    </div>
                                    <h4 className="post__content">{user.bio}</h4>
                                </div>
                            </div>

                            {user._id !== auth._id &&
                                <div className="post__buttons">
                                    {!following.includes(user._id) &&
                                        <button onClick={() => follow(user._id)} className="post__button post__button--green">
                                            Seguir
                                        </button>
                                    }
                                    {following.includes(user._id) &&
                                        <button onClick={() => unfollow(user._id)} className="post__button">
                                            Dejar de Seguir
                                        </button>
                                    }
                                </div>
                            }
                        </article>
                    );
                })}
            </div>

            {more &&
                <div className="content__container-btn">
                    <button onClick={nextPage} className="content__btn-more-post">
                        Ver mas personas
                    </button>
                </div>
            }
            <br />
        </>
    )
}
