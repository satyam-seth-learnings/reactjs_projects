import { Outlet, Navigate } from "react-router";

const AuthLayout = () => {
    const isAuthenticated = false;

    return (
        <>
        {
            isAuthenticated ? 
            (
                <Navigate to="/" />
            )
            : (
                <>
                    <section>
                        <Outlet />
                    </section>
                </>
             )
        }
        </>
    );
}

export default AuthLayout;