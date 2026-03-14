import { Link } from "react-router-dom";
import VinoCard from "../components/VinoCard";
import usePreferitiContext from "../hooks/usePreferitiContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function PreferitiPage() {

    /**********
        HOOK
    ***********/
    const { preferiti, svuotaListaPreferiti } = usePreferitiContext();

    /************
        RENDER
    *************/
    return(

        <>
            {/* Bottone preferiti */}
            {preferiti.length > 0 && (
                <div className="preferiti-header container-page">
                    <button
                        onClick={svuotaListaPreferiti}
                        className="btn-svuota-preferiti"
                    >
                        Svuota Lista
                    </button>
                </div>
            )}

            {/* Lista Preferiti */}
            <div className="container-page container-vino-card">
                {preferiti.length > 0 ? ( 
                    preferiti.map( vino => (
                        <VinoCard
                            key={vino.id}
                            vino={vino}
                        />
                    ))
                ) :(
                        <div className="container-centro-pagina container-page">
                        
                        <div className="icona-cuore">
                            <FontAwesomeIcon icon={faHeart} />
                        </div>

                        <h1>Nessun preferito ancora</h1>
                        <p> Salva i vini che ami di più e ritrovali qui quando vuoi</p>
                            <div className="piccola-linea-dettaglio"></div>
                        <Link to="/vini" className="link-nessun-preferito"> ESPLORA LA COLLEZIONE → </Link>

                    </div>
                )}
            </div>
        </>
    )
}

export default PreferitiPage;