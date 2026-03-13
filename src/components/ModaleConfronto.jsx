import useConfrontoContext from "../hooks/useConfrontoContext";
import SlotConfrontoCard from "./SlotConfrontoCard";


function ModaleConfronto() {

    /* Destructuring gestione confronto */
    const { confronti, isOpenModaleConfronto, toggleModale } = useConfrontoContext();

    return(

        isOpenModaleConfronto && (

            <div className="overlay-sfondo"> 
                <div className="overlay-modale"> 

                    {/* Bottone per chiudere la modale */}
                    <button 
                        onClick={toggleModale}
                        className="btn-chiusura-modale"> x 
                    </button>

                    {/* Titolo */}
                    <h2> Confronto Vini</h2>

                    {/* Container slots */}
                    <div className="container-slots-confronto">

                        {/* Slot sinistro */}
                        <SlotConfrontoCard 
                            vino={confronti[0]} 
                        />

                        {/* Slot sinistro */}
                        <SlotConfrontoCard 
                            vino={confronti[1]} 
                        />

                    </div>

                </div>
            </div>
        )
    )
}

export default ModaleConfronto;