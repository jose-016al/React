import { useState } from "react";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";
import { useForm } from "../../hooks/useForm"

export const Register = () => {

    const { form, changed } = useForm({});
    const [saved, setSaved] = useState("not_sended");

    const saveUser = async (e) => {
        e.preventDefault();
        let newUser = form;
        const { data } = await Petition(`${Global.url}user/register`, "POST", newUser);
        if (data.status === "success") {
            setSaved("saved");
        } else {
            setSaved("error");
        }
    }


    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Registro</h1>
            </header>

            <div className="content__posts">
                {saved == "saved" ? <strong className="alert alert-success">Usuario registrado correctamente</strong> : ""}
                {saved == "error" ? <strong className="alert alert-danger">El usuario no se ha registrado</strong> : ""}
                <form className="register-form" onSubmit={saveUser}>
                    <div className="form-group">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Apellidos</label>
                        <input type="text" name="surname" onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="nick">Nick</label>
                        <input type="text" name="nick" onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" name="email" onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" onChange={changed} />
                    </div>

                    <input type="submit" value="Registrate" className="btn btn-success" />
                </form>
            </div>
        </>
    )
}
