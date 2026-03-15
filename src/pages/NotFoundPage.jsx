import { useNavigate } from "react-router-dom";

function NotFoundPage() {

    /**********
        HOOK
    ***********/
    const navigate = useNavigate();

    /*************
        RENDER
    **************/
    return(

        <div className="container-page container-centro-pagina">   

            {/* Titolo 404 */}
            <div className="header-not-found">
                <h1>
                    <span className="numero">4</span>
                    <img src="/images/calice.png" alt="calice" className="calice-ntf"/>
                    <span className="numero">4</span>
                </h1>
            </div>

            {/* Sottotitolo + descrizione */}
            <div className="main-not-found">
                <h2> <span>OOps!</span> Qualcuno ha versato il vino...</h2>
                <p> La pagina che cerchi è finita fuori rotta… <br/>
                    ma tra i nostri vini troverai sicuramente qualcosa di buono.
                </p>

                {/* Bottone navigazione verso Home */}
                <button 
                    className="btn-not-found"
                    onClick={() => navigate("/")}
                >
                    Torna alla Home 
                </button>

                {/* Bottone navigazione verso pagina Vini */}
                <button 
                    className="btn-not-found"
                    onClick={() => navigate("/vini")}
                > 
                    Esplora i Vini → 
                </button>    
            </div>
        </div>
    )
}

export default NotFoundPage;