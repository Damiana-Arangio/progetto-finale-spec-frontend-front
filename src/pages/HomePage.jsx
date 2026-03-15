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
                <h4> ESPLORA • SALVA • CONFRONTA </h4>
                {/* <div className="linea-decorativa-s"></div> */}
                <h1> L'Arte del <span>Vino</span> </h1>
                <p> Esplora una selezione di vini, scopri i dettagli <br/> e confronta le caratteristiche dei tuoi preferiti. </p>
                <button onClick={() => navigate("/vini")}> VAI AL CATALOGO <span className="freccia">→</span> </button>
            </div>
        </section>        
    )
}

export default HomePage;