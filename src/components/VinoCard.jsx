import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faScaleBalanced } from "@fortawesome/free-solid-svg-icons";


function VinoCard( {vino} ) {

    /* Selezione immagine per categoria */
    const immagine = recuperaImgVino(vino.category);
   
    /************
        RENDER
    *************/
    return(
        <div className="vino-card">

            {/* Icona preferiti + confronto */}
            <div className="container-icone-card">

                <button className="btn-preferito"> 
                    <FontAwesomeIcon icon={faHeart} />
                </button>

                <button className="btn-confronto">
                    <FontAwesomeIcon icon={faScaleBalanced} />
                </button>
            </div>
            <img src={immagine} alt={vino.title} className="vino-img"/>
            <h2>{vino.title}</h2>
            <h4>{vino.category.toUpperCase()}</h4>
        </div>
    )

    /*************
        FUNZIONI
    **************/
   // Recupera immagine in base alla categoria
    function recuperaImgVino(category) {

        if (category === "rosso") {
            return "/images/vino-rosso.png";
        }
        else if (category === "bianco") {
            return "/images/vino-bianco.png";
        }
        else{
            return "/images/vino-rosato.png";
        }
    }
}

export default VinoCard;