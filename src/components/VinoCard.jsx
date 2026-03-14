import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { recuperaImgVino } from "../utils/functions";
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

        <div className="vino-card">

            {/* Icona preferiti + confronto */}
            <div className="container-icone-card">

                <button onClick={() => handlePreferiti(vino)}> 
                    <FontAwesomeIcon icon={faHeart} className={isPreferito(vino) ? "color-gold" : "color-light-brown"}/>
                </button>

                <button onClick={() => handleConfronto(vino)}> 
                    <FontAwesomeIcon icon={faScaleBalanced} className={isAddConfronto(vino) ? "color-gold" : "color-light-brown"} />
                </button>
            </div>

            <Link to={`/vini/${vino.id}`}>
                <img src={immagine} alt={vino.title} className="vino-img" />
            </Link>

            <h2>{vino.title}</h2>
            <h4>{vino.category.toUpperCase()}</h4>
        </div>
    )
}

export default memo(VinoCard);