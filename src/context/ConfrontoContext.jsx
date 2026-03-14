import { createContext, useState} from "react";
import useApiContext from "../hooks/useApiContext";


/*************
    CONTEXT
**************/

// Creazione contesto confronto
const ConfrontoContext = createContext();

// Fornitura del contesto tramite Provider
function ConfrontoProvider( {children} ) {
    
    /***********
        HOOKS
    ***********/
    const [confronti, setConfronti] = useState([]);
    const [isOpenModaleConfronto, setIsOpenModaleConfronto] = useState(false);
    const { fetchVino } = useApiContext();

    /************
        RENDER
    ************/
    return(
        <ConfrontoContext.Provider
            value={{ confronti, isOpenModaleConfronto, toggleModale, handleConfronto, isAddConfronto } }>
                {children}
        </ConfrontoContext.Provider>
    )


    /************************ 
        FUNZIONI PROVIDER
    ************************/
   
    // Funzione per aprire e chiudere la modale 
    function toggleModale() {
        setIsOpenModaleConfronto(currValue => !currValue);
    }

    // Funzione che controlla se il vino è già presente nell'array confronti
    function isAddConfronto(vino) {
        return confronti.some(confronto => confronto.id === vino.id)
    }

    // Funzione per aggiungere un vino al confronto
    async function handleConfronto(vino) {

        // Se il vino è presente -> rimuovi
        if (isAddConfronto(vino)) {
            setConfronti(
                currConfronti => currConfronti.filter(confronto => confronto.id !== vino.id)
            )
        }

        // Altrimenti prova ad aggiungere
        else {

            // Blocca l'aggiunta di più di due vini nell'array confronti
            if (confronti.length >= 2) {
                alert("Puoi confrontare massimo 2 vini!");
                return
            }

            let vinoCompleto = vino;

            // Se il vino viene aggiunto da ViniPage, recupera i dettagli mancanti
            if (!vino.price) {
                const vinoFetch = await fetchVino(vino.id);

                vinoCompleto = vinoFetch;
            }

            // Aggiorna stato
            setConfronti( 
                currConfronti => {
                    const confrontiAggiornato = [...currConfronti, vinoCompleto]
                
                    // Se nell'array confronti ci sono 2 vini --> apri la modale per mostrarli
                    if (confrontiAggiornato.length === 2) {
                        setIsOpenModaleConfronto(true);
                    }

                    return confrontiAggiornato;
                }
            )
        }
    }
}
export { ConfrontoContext, ConfrontoProvider };