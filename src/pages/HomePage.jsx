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
                <h4> SCOPRI • SELEZIONA • CONFRONTA </h4>
                <h1> Confronta i tuoi <span> preferiti </span> </h1>
                <p> Esplora una selezione di vini, scopri i dettagli <br /> e salva i tuoi preferiti per confrontarli. </p>
                <button onClick={() => navigate("/vini")}> SCOPRI I VINI <span className="freccia">→</span> </button>
            </div>
        </section>        
    )
}

export default HomePage;