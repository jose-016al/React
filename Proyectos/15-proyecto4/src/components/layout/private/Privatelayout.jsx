import { Header } from './Header'
import { Navigate, Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { useAuth } from '../../../hooks/useAuth'

export const Privatelayout = () => {

    const { auth, loading } = useAuth();

    if (loading) {
        return <h1>Cargando</h1>
    } else {
        return (
            <>
                {/* LAYOUT */}
                <Header />
                {/* Contenido principal */}
                <section className='layout__content'>
                {auth._id ? <Outlet /> : <Navigate to="/login" />}
                </section>
                {/* Barra lateral */}
                <Sidebar />
            </>
        )
    }

}
