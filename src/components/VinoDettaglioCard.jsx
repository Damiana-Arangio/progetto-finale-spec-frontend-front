import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faCalendar, faPercent, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Grape } from "lucide-react";
import { useNavigate } from "react-router-dom";
import usePreferitiContext from "../hooks/usePreferitiContext";


function VinoDettaglioCard(props) {
    const { vino } = props;
    const navigate = useNavigate();

    /* Desctructuring funzioni gestione preferiti */
    const { handlePreferiti, isPreferito } = usePreferitiContext();

    console.log("render");
    
    /************
        RENDER
    *************/
    return (

        <div className="container-page">
            
            <button
                className="btn-indietro"
                onClick={() => navigate(-1)}
            >
                ← Torna indietro
            </button>

            {/* Header */}
            <div className="vino-header">

                {/* Tipo vino */}
                <div className="tipo-vino-dettaglio">
                    <p>VINO {vino.category.toUpperCase()} {vino.type.toUpperCase()}</p>
                </div>

                {/* Titolo */}
                <h2 className="vino-titolo">{vino.title}</h2>
            </div>

            <div className="container-vino-layout">

                {/* COLONNA SINISTRA */}
                    <figure>
                        <img src={vino.image} alt={vino.title} className="img-vino-dettaglio" />
                    </figure>


                {/* COLONNA DESTRA */}
                <div className="container-vino-layout-right">

                    <div className="container-prezzo-icons">

                        {/* Prezzo */}
                        <p className="vino-prezzo">€{vino.price}</p>

                        {/* Icona preferiti + confronto */}
                        <div className="container-icone-card-dettaglio">
            
                            <button onClick={() => handlePreferiti(vino)}> 
                                <FontAwesomeIcon icon={faHeart} className={isPreferito(vino) ? "colore-preferiti" : "colore-non-preferiti"} />
                            </button>
            
                            <button>
                                <FontAwesomeIcon icon={faScaleBalanced} />
                            </button>
                        </div>
                    </div>

                    {/* Linea */}
                    <div className="piccola-linea-dettaglio"></div>

                    {/* Descrizione */}
                    <div className="descrizione">
                        <h4>DESCRIZIONE</h4>
                        <p>{vino.description}</p>
                    </div>

                    {/* INFO */}
                    <div className="vino-dettaglio-info-left-right">
                        <div>  
                            {/* Regione */}
                            <div className="flex-row info-item">
                                <FontAwesomeIcon icon={faMapPin} className="icone-info-dettaglio" />
                                <div className="info-dettaglio">
                                    <h4>REGIONE</h4>
                                    <p>{vino.region}</p>
                                </div>
                            </div>

                            {/* Anno */}
                            <div className="flex-row info-item">
                                <FontAwesomeIcon icon={faCalendar} className="icone-info-dettaglio" />
                                <div className="info-dettaglio">
                                    <h4>ANNATA</h4>
                                    <p>{vino.year}</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            {/* Vitigno */}
                            <div className="flex-row info-item">
                                <Grape size={20} className="icone-info-dettaglio" />
                                <div className="info-dettaglio">
                                    <h4>VITIGNO</h4>
                                    <p>{vino.grape}</p>
                                </div>
                            </div>

                            {/* Gradazione */}
                            <div className="flex-row info-item">
                                <FontAwesomeIcon icon={faPercent} className="icone-info-dettaglio" />
                                <div className="info-dettaglio">
                                    <h4>GRADAZIONE</h4>
                                    <p>{vino.alcohol}%</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default VinoDettaglioCard;