import { createContext, useState} from "react";

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

    console.log("Confronti: ", confronti);
    console.log("isOpenModaleConfronto: ", isOpenModaleConfronto);

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

    // Funzione per aggiungere un vino al confronto
    function handleConfronto(vino) {

        // Se il vino è presente -> rimuovi, altrimenti prova ad aggiungere
        if (isAddConfronto(vino)) {
            setConfronti(
                currConfronto => currConfronto.filter(confronto => confronto.id !== vino.id)
            )
        }
        else {
            if(confronti.length >= 2) {
                alert("Puoi confrontare massimo 2 vini!");
                return
            }
            setConfronti(
                currConfronto => [...currConfronto, vino]
            )
        }
    }

    // Funzione che controlla se il vino è già presente nel confronto
    function isAddConfronto(vino) {
        const isAddConfronto = confronti.some(confronto => confronto.id === vino.id)
        return isAddConfronto;
    }
}

export { ConfrontoContext, ConfrontoProvider };