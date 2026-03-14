import { createContext, useState } from "react";

// Recupero URL base API dal file .env
const API_URL = import.meta.env.VITE_API_URL;

/*************
    CONTEXT
**************/

// Creazione contesto Api
const ApiContext = createContext();

// Fornitura del contesto tramite Provider
function ApiProvider({ children }) {

    /***********
        HOOKS
    ***********/
    const [vini, setVini] = useState([]);
    const [vino, setVino] = useState(null);

    /************
        RENDER
    ************/
    return (
        <ApiContext.Provider value={{ vini, vino, fetchVini, fetchVino, searchVinoByTitle, filterViniByCategory }}>
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

    // Ricerca vino per titolo
    async function searchVinoByTitle(search) {

        try {
            const response = await fetch(`${API_URL}/wines?search=${search}`);

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }

            const data = await response.json();
            setVini(data);

        } 
        
        catch (error) {
            console.error("Errore nella ricerca:", error.message);
        }
    }


    // Filtra per categoria
    async function filterViniByCategory(category) {
        try {

            if (category === "tutti") {
                fetchVini();
                return;
            }

            const response = await fetch(`${API_URL}/wines?category=${category}`);

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }

            const data = await response.json();
            setVini(data);

        } 

        catch (error) {
            console.error("Errore nel filtro dei vini:", error.message);
        }
    }

}

export { ApiContext, ApiProvider };