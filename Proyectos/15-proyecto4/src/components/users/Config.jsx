import { useState } from 'react'
import avatar from '../../assets/img/user.png';
import { useAuth } from '../../hooks/useAuth';
import { Petition } from '../../helpers/Petition';
import { Global } from '../../helpers/Global';
import { serializeForm } from '../../helpers/SerializeForm';

export const Config = () => {

    const { auth, setAuth } = useAuth();
    const [saved, setSaved] = useState("not_sended");

    const updateUser = async (e) => {
        e.preventDefault();
        let user = serializeForm(e.target);
        delete user.file0;
        const token = localStorage.getItem('token');
        const { data } = await Petition(`${Global.url}user/update`, "PUT", user, false, token);
        
        if (data.status === "success") {
            delete data.user.pawssword
            const updatedUser = { ...auth, ...data.user };
            setAuth(updatedUser);
            setSaved("saved");
            /* window.location.reload(); */
        } else {
            setSaved("error");
        }

        /* Subir imagen */
        const fileInput = document.querySelector("#file");
        if (data.status === "success" && fileInput.files[0]) {
            const formData = new FormData();
            formData.append("file0", fileInput.files[0]);
            const upload = await Petition(`${Global.url}user/upload`, "POST", formData, true, token);
            if (upload.data.status === "success") {
                delete upload.data.user.password;
                const updatedUser = { ...auth, image: upload.data.user.image };
                setAuth(updatedUser);
                setSaved("saved");
            } else {
                setSaved("error");
            }
        }
    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Ajustes</h1>
            </header>

            <div className="content__posts">
                {saved == "saved" ? <strong className="alert alert-success">El usuario se ha actualizado correctamente</strong> : ""}
                {saved == "error" ? <strong className="alert alert-danger">No se ha podido actualizar el usuario</strong> : ""}
                <form className="config-form" onSubmit={updateUser}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" defaultValue={auth.name} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Apellidos</label>
                        <input type="text" name="surname" defaultValue={auth.surname} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nick">Nick</label>
                        <input type="text" name="nick" defaultValue={auth.nick} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Biografia</label>
                        <textarea type="text" name="bio" defaultValue={auth.bio} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" name="email" defaultValue={auth.email} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="file0">imagen de perfil</label>
                        <div className="general-info__container-avatar">
                            {auth.image != "default.png" && <img src={`${Global.url}user/avatar/${auth.image}`} className="container-avatar__img" alt="Foto de perfil" />}
                            {auth.image == "default.png" && <img src={avatar} className="container-avatar__img" alt="Foto de perfil" />}
                        </div>
                        <br />
                        <input type="file" name="file0" id='file' />
                    </div>

                    <br />
                    <input type="submit" value="Actualizar" className="btn btn-success" />
                </form>
                <br />
            </div>
        </>
    )
}
