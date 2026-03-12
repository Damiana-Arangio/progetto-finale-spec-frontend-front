import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import ModaleConfronto from "../components/ModaleConfronto"

function DefaultLayout() {

    return(

        <>
            <header>
                <Navbar />
            </header> 

            <main>
                <Outlet/>
            </main>

            <ModaleConfronto />
        </>

    )
}

export default DefaultLayout;