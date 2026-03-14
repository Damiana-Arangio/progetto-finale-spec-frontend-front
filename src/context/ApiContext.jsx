import { createContext, useState } from "react";

// Recupero URL base API dal file .env
const API_URL = import.meta.env.VITE_API_URL;

/*************
    CONTEXT
**************/

// Creazione contesto Api
const ApiContext = createContext();

function ApiProvider({ children }) {

    /**********
        HOOKS
    ***********/
    const [vini, setVini] = useState([]);
    const [vino, setVino] = useState(null);

    /************
        RENDER
    ************/
    return (
        <ApiContext.Provider value={{ vini, fetchVini, vino, fetchVino }}>
            {children}
        </ApiContext.Provider>
    )

    /************************ 
        FUNZIONI PROVIDER
    ************************/

    // Recupera la lista dei vini dall'API
    async function fetchVini() {

        try {
            const response = await fetch(`${API_URL}/wines`);

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }

            const data = await response.json();
            setVini(data);
        } 

        catch (error) {
            console.error("Errore nel fetch dei vini:", error.message);
        }
    }

    // Recupera vino tramite id
    async function fetchVino(id) {

        try {
            const response = await fetch(`${API_URL}/wines/${id}`);

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }

            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message);
            }

            setVino(data.wine);
            return data.wine;
        }

        catch (error) {
            console.error("Errore nel fetch del vino:", error.message);
            return null;
        }
    }
}

export { ApiContext, ApiProvider };