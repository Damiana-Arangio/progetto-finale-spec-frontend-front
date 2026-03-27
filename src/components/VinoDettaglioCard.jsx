import { useNavigate } from "react-router-dom";
import { Grape } from "lucide-react";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapPin, faCalendar, faPercent, faScaleBalanced } from "@fortawesome/free-solid-svg-icons";
import usePreferitiContext from "../hooks/usePreferitiContext";
import useConfrontoContext from "../hooks/useConfrontoContext";


function VinoDettaglioCard({ vino }) {

    /***********
        HOOKS
    ***********/
    const navigate = useNavigate();
    const { handlePreferiti, isPreferito } = usePreferitiContext();
    const { handleConfronto, isAddConfronto } = useConfrontoContext();
    
    /************
        RENDER
    *************/
    return (

        <div className="container-page">
            
            {/* Bottone navigazione verso pagina precedente */}
            <button
                className="btn-indietro"
                onClick={() => navigate(-1)}
            >
                ← Torna indietro
            </button>

            {/* Categoria + Tipo + Titolo vino */}
            <div className="vino-header">
                <div className="tipo-vino-dettaglio">
                    <p>VINO {vino.category.toUpperCase()} {vino.type.toUpperCase()}</p>
                </div>
                <h2 className="vino-titolo">{vino.title}</h2>
            </div>

            {/* Immagine + Dettagli vino */}
            <div className="container-vino-layout">

                {/* COLONNA SINISTRA: immagine */}
                    <figure>
                        <img src={vino.image} alt={vino.title} className="img-vino-dettaglio" />
                    </figure>


                {/* COLONNA DESTRA: dettagli  */}
                <div className="container-vino-layout-right">

                    {/* Prezzo + icone */}
                    <div className="container-prezzo-icons">

                        {/* prezzo */}
                        <p className="vino-prezzo">€{vino.price}</p>

                        {/* Icona preferiti + confronto */}
                        <div className="container-icone-card-dettaglio">
                        
                            <button onClick={() => handlePreferiti(vino)}> 
                                <FontAwesomeIcon icon={faHeart} className={isPreferito(vino) ? "color-gold" : "color-light-brown"} />
                            </button>
            
                            <button onClick={() => handleConfronto(vino)}>
                                <FontAwesomeIcon icon={faScaleBalanced} className={isAddConfronto(vino) ? "color-gold" : "color-light-brown"} />
                            </button>
                        </div>
                    </div>

                    {/* Linea Decorativa */}
                    <div className="linea-decorativa-s"></div>

                    {/* Descrizione */}
                    <div className="descrizione">
                        <h4>DESCRIZIONE</h4>
                        <p>{vino.description}</p>
                    </div>

                    {/* INFO */}
                    <div className="vino-dettaglio-info-left-right">

                        {/* Regione + Anno */}
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

                        {/* Vitigno + Gradazione */}
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