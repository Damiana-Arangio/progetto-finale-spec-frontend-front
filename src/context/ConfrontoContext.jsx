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
    const [confronto, setConfronto] = useState([]);
    const [isOpenModaleConfronto, setIsOpenModaleConfronto] = useState(false);

    /************
        RENDER
    ************/
    return(
        <ConfrontoContext.Provider
            value={{ confronto, setConfronto, isOpenModaleConfronto, toggleModale } }>
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
}

export { ConfrontoContext, ConfrontoProvider };