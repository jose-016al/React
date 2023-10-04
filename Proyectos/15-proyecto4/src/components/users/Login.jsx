import { useState } from "react";
import { Global } from "../../helpers/Global";
import { Petition } from "../../helpers/Petition";
import { useForm } from "../../hooks/useForm"
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {

    const { form, changed } = useForm({});
    const [saved, setSaved] = useState("not_sended");
    const {setAuth} = useAuth();

    const loginUser = async(e) => {
        e.preventDefault();
        let user = form;
        const { data } = await Petition(`${Global.url}user/login`, "POST", user);
        if (data.status === "success") {
            /* Persistir datos en localStorage */
            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            setSaved("login");
            /* Setear datos en el auth */
            setAuth(data.user);
            /* Redirrecion */
            window.location.reload();
        } else {
            setSaved("error");
        }
    }

    return (
        <>
            <header className="content__header content__header--public">
                <h1 className="content__title">Login</h1>
            </header>

            <div className="content__posts">
                {saved == "login" ? <strong className="alert alert-success">Se ha identificado</strong> : ""}
                {saved == "error" ? <strong className="alert alert-danger">El usuario o la contraseña son incorrecta</strong> : ""}
                <form className="form-login" onSubmit={loginUser}>
                    <div className="form-group">
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" name="email" onChange={changed} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" onChange={changed} />
                    </div>

                    <input type="submit" value="Identificate" className="btn btn-success" />
                </form>
            </div>
        </>
    )
}
