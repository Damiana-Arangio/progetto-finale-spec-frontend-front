import { useNavigate } from "react-router-dom";

function HomePage() {

    /***********
        HOOK
    ***********/
    const navigate = useNavigate();

    /************
        RENDER
    ************/
    return (
        <section className="bg-home">
            <div className="overlay"></div>
            <div className="container-content">
                <h4> COLLEZIONE ESCLUSIVA </h4>
                <div className="linea-decorativa"></div>
                <h1> L'Arte del <span>Vino</span> </h1>
                <p> Una selezione curata dei migliori vini italiani e internazionali, scelti per chi apprezza l'eccellenza </p>
                <button onClick={() => navigate("/vini")}> ESPLORA LA COLLEZIONE <span className="freccia">→</span> </button>
            </div>
        </section>        
    )
}

export default HomePage;