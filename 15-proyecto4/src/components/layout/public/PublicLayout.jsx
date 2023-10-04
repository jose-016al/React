import { useAuth } from '../../../hooks/useAuth'
import { Header } from './Header'
import { Navigate, Outlet } from 'react-router-dom'

export const PublicLayout = () => {

    const { auth } = useAuth();

    return (
        <>
            {/* LAYOUT */}
            <Header />
            {/* Contenido principal */}
            <section className='layout__content'>
                {!auth._id ? <Outlet /> : <Navigate to="/social" /> } 
            </section>
        </>
    )
}
