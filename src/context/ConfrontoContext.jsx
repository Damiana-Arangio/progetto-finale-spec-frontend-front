import { createContext, useState} from "react";

const API_URL = import.meta.env.VITE_API_URL;

/*************
    CONTEXT
**************/

// Creazione contesto preferiti
const ConfrontoContext = createContext();

// Fornitura del contesto tramite Provider
function ConfrontoProvider( {children} ) {
    
    /**********
        HOOK
    ***********/
    const [confronti, setConfronti] = useState([]);
    const [isOpenModaleConfronto, setIsOpenModaleConfronto] = useState(false);

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

    // Funzione che controlla se il vino è già presente nel confronto
    function isAddConfronto(vino) {
        const isAddConfronto = confronti.some(confronto => confronto.id === vino.id)
        return isAddConfronto;
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
                try {
                    const response = await fetch(`${API_URL}/wines/${vino.id}`);

                    if (!response.ok) {
                        throw new Error(`Errore HTTP ${response.status}`);
                    }

                    const data = await response.json();
                    vinoCompleto = data.wine;

                } 
                catch (error) {
                    console.error("Errore nel fetch del vino:", error.message);
                    return
                }
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