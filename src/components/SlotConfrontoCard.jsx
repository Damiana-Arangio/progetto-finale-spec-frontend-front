
function SlotConfrontoCard( props ) {

    // Destructurin dell'oggetto vino + funzione rimozione cestino
    const { vino, handleConfronto } = props;

    /* Selezione immagine per categoria */
    const immagine = vino ? recuperaImgVino(vino.category) : null;

    return(

        <>
            {/* Container singolo slot */ }
            < div className = "container-singolo-slot-confronto"> 
                
                {/* Cestino */}
                {vino && (
                    <button onClick={() => handleConfronto(vino)}>
                        cestino
                    </button>
                )}

                {/* Slot */}
                {vino ? (
                    <div className="slot-pieno">

                        {/* Immagine + titolo */}
                        <img src={immagine} alt={vino.title} className="vino-img-confronto" />
                        <h3>{vino.title}</h3>
                        <h4>{vino.category}</h4>

                        {/* Linea */}
                        <div className="piccola-linea-dettaglio" ></div>

                        {/* Dettagli vino */}
                        <div className="dettagli-confronto">
                            <p> Prezzo: €{vino.price}</p>
                            <p> Regione: {vino.region}</p>
                            <p> Annata: {vino.year}</p>
                            <p> Vitigno: {vino.grape}</p>
                            <p> Gradazione: {vino.alcohol}</p>
                        </div>
                    </div>

                ) : (

                    <div className="slot-vuoto">
                        <p>Aggiungi un vino</p>
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