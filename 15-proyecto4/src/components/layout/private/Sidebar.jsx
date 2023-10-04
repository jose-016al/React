import { Link } from 'react-router-dom';
import avatar from '../../../assets/img/user.png';
import { Global } from '../../../helpers/Global';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from '../../../hooks/useForm';
import { Petition } from '../../../helpers/Petition';
import { useState } from 'react';

export const Sidebar = () => {

    const { auth, counters } = useAuth();
    const { form, changed } = useForm({});
    const [saved, setSaved] = useState("not_sended");

    const savePublication = async (e) => {
        e.preventDefault();
        const myForm = document.querySelector("#publication-form");
        /* Recoger datos del formulario */
        let publication = form;
        const token = localStorage.getItem("token");
        const { data } = await Petition(`${Global.url}publication/save`, "POST", publication, false, token);
        if (data.status === "success") {
            setSaved("saved");
        } else {
            setSaved("error");
        }

        /* Subir imagen */
        const fileInput = document.querySelector("#file");
        if (data.status === "success" && fileInput.files[0]) {
            const formData = new FormData();
            formData.append("file0", fileInput.files[0]);
            const upload = await Petition(`${Global.url}publication/upload/${data.publication._id}`, "POST", formData, true, token);
            if (upload.data.status === "success") {
                setSaved("saved");
                myForm.reset();
            } else {
                setSaved("error");
            }
        }

        if (data.status == "success") {
            myForm.reset();
        }
    }

    return (
        <aside className="layout__aside">

            <header className="aside__header">
                <h1 className="aside__title">Hola, {auth.name}</h1>
            </header>

            <div className="aside__container">
                <div className="aside__profile-info">
                    <div className="profile-info__general-info">
                        <div className="general-info__container-avatar">
                            {auth.image != "default.png" && <img src={`${Global.url}user/avatar/${auth.image}`} className="container-avatar__img" alt="Foto de perfil" />}
                            {auth.image == "default.png" && <img src={avatar} className="container-avatar__img" alt="Foto de perfil" />}
                        </div>

                        <div className="general-info__container-names">
                            <Link to={`/social/profile/${auth._id}`} className="container-names__name">{auth.name} {auth.surname}</Link>
                            <p className="container-names__nickname">{auth.nick}</p>
                        </div>
                    </div>

                    <div className="profile-info__stats">
                        <div className="stats__following">
                            <Link to={`/social/following/${auth._id}`} className="following__link">
                                <span className="following__title">Siguiendo</span>
                                <span className="following__number">{counters.following}</span>
                            </Link>
                        </div>
                        <div className="stats__following">
                            <Link to={`/social/followers/${auth._id}`} className="following__link">
                                <span className="following__title">Seguidores</span>
                                <span className="following__number">{counters.followed}</span>
                            </Link>
                        </div>

                        <div className="stats__following">
                            <Link to={`/social/profile/${auth._id}`} className="following__link">
                                <span className="following__title">Publicaciones</span>
                                <span className="following__number">{counters.publications}</span>
                            </Link>
                        </div>
                    </div>
                </div>


                <div className="aside__container-form">
                    {saved == "saved" ? <strong className="alert alert-success">Post publicado</strong> : ""}
                    {saved == "error" ? <strong className="alert alert-danger">No se ha podido publicar el post</strong> : ""}
                    <form id='publication-form' onSubmit={savePublication} className="container-form__form-post">
                        <div className="form-post__inputs">
                            <label htmlFor="text" className="form-post__label">¿Que estas pesando hoy?</label>
                            <textarea name="text" className="form-post__textarea" onChange={changed} />
                        </div>
                        <div className="form-post__inputs">
                            <label htmlFor="file0" className="form-post__label">Sube tu foto</label>
                            <input type="file" name="file0" id='file' className="form-post__image" />
                        </div>

                        <input type="submit" value="Enviar" className="form-post__btn-submit" />
                    </form>
                </div>
            </div>
        </aside>
    )
}
