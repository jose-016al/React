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
        <aside>
            <div>
                <div className="profile-info">
                    <div className="profile-info-image">
                        {auth.image != "default.png" && <img src={`${Global.url}user/avatar/${auth.image}`} alt="Foto de perfil" />}
                        {auth.image == "default.png" && <img src={avatar} alt="Foto de perfil" />}
                    </div>

                    <div className="profile-info-name">
                        <Link to={`/social/profile/${auth._id}`}>{auth.name} {auth.surname}</Link>
                        <p>{auth.nick}</p>
                    </div>
                </div>

                <div className="profile-info-stats">
                    <div>
                        <Link to={`/social/following/${auth._id}`}>
                            <span>Siguiendo</span>
                            <span>{counters.following}</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/social/followers/${auth._id}`}>
                            <span>Seguidores</span>
                            <span>{counters.followed}</span>
                        </Link>
                    </div>
                    <div>
                        <Link to={`/social/profile/${auth._id}`}>
                            <span>Publicaciones</span>
                            <span>{counters.publications}</span>
                        </Link>
                    </div>
                </div>
            </div>


            {/* <div className="aside__container-form">
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
            </div> */}
        </aside>
    )
}
