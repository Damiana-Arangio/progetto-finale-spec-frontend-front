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
            value={{ preferiti, setPreferiti, isPreferito, handlePreferiti, svuotaListaPreferiti } }>
                {children}
        </PreferitiContext.Provider>
    )

    
    /************************ 
        FUNZIONI PROVIDER
    ************************/
   
    // Funzione che controlla se il vino è già presente nei preferiti
    function isPreferito(vino) {
        return preferiti.some(preferito => preferito.id === vino.id)
    }

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

    // Funzione per eliminare tutti i vini dai preferiti
    function svuotaListaPreferiti() {
        setPreferiti([]);
    }
}

export { PreferitiContext, PreferitiProvider };