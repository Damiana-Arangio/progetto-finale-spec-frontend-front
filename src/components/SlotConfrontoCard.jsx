import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import useConfrontoContext from "../hooks/useConfrontoContext";

import { useNavigate } from "react-router-dom";

function SlotConfrontoCard({ vino } ) {

    /* Hooks navigazione e gestione confronto */
    const navigate = useNavigate();
    const { handleConfronto, toggleModale } = useConfrontoContext();

    /* Selezione immagine per categoria */
    const immagine = vino ? recuperaImgVino(vino.category) : null;

    return(

        <>
            {/* Container singolo slot */ }
            < div className = "container-singolo-slot-confronto"> 
                
                {/* Cestino */}
                {vino && (
                    <button
                        className="btn-cestino-confronto"
                        onClick={() => handleConfronto(vino)}
                    >
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                )}
                
                {vino ? (
                    <div className="slot-pieno">

                        {/* Immagine + titolo */}
                        <img src={immagine} alt={vino.title} className="vino-img-confronto" />
                        <h3>{vino.title}</h3>
                        <h4>{vino.category.toUpperCase()}</h4>

                        {/* Linea */}
                        <div className="mini-linea-decorativa" ></div>

                        {/* Dettagli vino */}
                        <div className="dettagli-confronto">
                            <p> Prezzo: <span> €{vino.price}</span> </p>
                            <p> Regione: <span> {vino.region}</span> </p>
                            <p> Annata: <span> {vino.year}</span> </p>
                            <p> Vitigno: <span>{vino.grape}</span> </p>
                            <p> Gradazione: <span>{vino.alcohol}%</span> </p>
                        </div>
                    </div>

                ) : (
                    <div className="slot-vuoto">
                        <button onClick={ () => {
                            toggleModale();
                            navigate("/vini")} 
                        }>
                            +
                        </button>
                        <p>Aggiungi un vino per confrontarlo</p>
                    </div>
                )}
            </div>  
        </>
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
        else {
            return "/images/vino-rosato.png";
        }
    }
}

export default SlotConfrontoCard;