import { createContext, useState } from "react";

// Creazione contesto preferiti
const PreferitiContext = createContext();

// Fornitura del contesto tramite Provider
function PreferitiProvider( {children} ) {
    
    const [preferiti, setPreferiti] = useState("test")

    return(
        <PreferitiContext.Provider
            value={ {preferiti, setPreferiti} }>
                {children}
        </PreferitiContext.Provider>
    )

    /************************ 
        FUNZIONI PROVIDER
    ************************/

    function addPreferiti() {
        // Funzione per aggiungere un vino ai preferiti
    }

    function removePreferiti() {
        // Funzione per rimuovere un vino dai preferiti
    }

    function isPreferito() {
        // funzione che restituisce true/false se un personaggio è tra i preferiti
    }
}

export { PreferitiContext, PreferitiProvider };