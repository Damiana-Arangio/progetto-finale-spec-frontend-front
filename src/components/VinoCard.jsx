import { memo } from "react";
import { Link } from "react-router-dom";
import { recuperaImgVino } from "../utils/functions";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import usePreferitiContext from "../hooks/usePreferitiContext";
import useConfrontoContext from "../hooks/useConfrontoContext";

function VinoCard( {vino} ) {

    // Recupero immagine del vino tramite utility
    const immagine = recuperaImgVino(vino.category);

    /***********
        HOOKS
    ***********/
    const { handlePreferiti, isPreferito } = usePreferitiContext();
    const { handleConfronto, isAddConfronto } = useConfrontoContext();

    /************
        RENDER
    *************/
    return (

        <div className={`vino-card ${isAddConfronto(vino) ? "selected" : ""}`}>

            {/* Label visibile solo se il vino è selezionato per il confronto */}
            {isAddConfronto(vino) && (
                <div className="container-selezione">
                    <p>✓ SELEZIONATO</p>
                </div>
            )}

            {/* Icona preferiti (sempre visibile) */}

            <div className="container-icone-card">
                <button
                    onClick={() => handlePreferiti(vino)}
                    title={isPreferito(vino) ? "Rimuovi dai preferiti" : "Aggiungi ai preferiti"}
                >
                    <FontAwesomeIcon
                        icon={faHeart}
                        className={isPreferito(vino) ? "color-gold" : "color-light-brown"}
                    />
                </button>
            </div>

            {/* Immagine vino */}
            <Link to={`/vini/${vino.id}`}>
                <img src={immagine} alt={vino.title} className="vino-img" />
            </Link>

            {/* Titolo + categoria */}
            <h2>{vino.title}</h2>
            <h4>{vino.category.toUpperCase()}</h4>

            {/* Bottone Confronto */}
            <button
                onClick={() => handleConfronto(vino)}
                className={`btn-confronto btn-filtri ${isAddConfronto(vino) ? "active-confronto" : ""}`}
            >
                <FontAwesomeIcon icon={faScaleBalanced} className="icona-confronto" />

                {isAddConfronto(vino) ? "Rimuovi dal Confronto" : "Aggiungi al Confronto" }
            </button>
        </div>
    )
}

export default memo(VinoCard);