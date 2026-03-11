import { createContext, useState } from "react";
import usePreferitiContext from "../hooks/usePreferitiContext";


// Creazione contesto preferiti
const PreferitiContext = createContext();

// Fornitura del contesto tramite Provider
function PreferitiProvider( {children} ) {
    
    const [preferiti, setPreferiti] = useState([])

    return(
        <PreferitiContext.Provider
            value={{ preferiti, setPreferiti, isPreferito, handlePreferiti} }>
                {children}
        </PreferitiContext.Provider>
    )

    /************************ 
        FUNZIONI PROVIDER
    ************************/

    // Funzione per aggiungere un vino ai preferiti
    function handlePreferiti(vino) {

        // Se il vino è presente -> rimuovi, altrimenti aggiungi
        if (isPreferito(vino)) {
            setPreferiti(
                currPreferiti => currPreferiti.filter(preferito => preferito.id !== vino.id)
            )
        }
        else {
            setPreferiti(
                currPreferiti => [...currPreferiti, vino]
            )
        }
    }

    // Funzione che controlla se il vino è già presente nei preferiti
    function isPreferito(vino) {
        const isPreferito = preferiti.some(preferito => preferito.id === vino.id)

        return isPreferito;
    }
}

export { PreferitiContext, PreferitiProvider };