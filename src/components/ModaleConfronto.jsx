import useConfrontoContext from "../hooks/useConfrontoContext";

function ModaleConfronto( ) {

    /* Destructuring gestione confronto */
    const { isOpenModaleConfronto, toggleModale } = useConfrontoContext();

    return(

        isOpenModaleConfronto && (
            <div className="overlay-sfondo"> 
                
                <div className="overlay-modale"> 

                    {/* Bottone per chiudere la modale */}
                    <button 
                        onClick={toggleModale}
                        className="btn-chiusura-modale"> x </button>

                    {/* Titolo */}
                    <h2> Confronto Vini</h2>

                    {/* Container slots */}
                    <div className="container-slots-confronto">

                        {/* Container slot sinistro */}
                        <div className="container-singolo-slot-confronto"> prova </div>

                        {/* Container slot destro */}
                        <div className="container-singolo-slot-confronto"> prova</div>

                    </div>
                </div>
            </div>
        )
    )
}

export default ModaleConfronto;