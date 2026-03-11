import { createContext, useState, useEffect } from "react";

/*************
    CONTEXT
**************/

// Creazione contesto preferiti
const PreferitiContext = createContext();

// Fornitura del contesto tramite Provider
function PreferitiProvider( {children} ) {
    
    /**********
        HOOK
    ***********/
    const [preferiti, setPreferiti] = useState( () => {

        // Recupera vini dallo storage (se presenti), altrimenti inizializza lo state con un array vuoto
        const salvati = localStorage.getItem("preferiti");
        return salvati ? JSON.parse(salvati) : [];
    } )

    // Sincronizza storage con array preferiti
    useEffect(() => {
        localStorage.setItem("preferiti", JSON.stringify(preferiti));
    }, [preferiti]);

    /************
        RENDER
    ************/
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