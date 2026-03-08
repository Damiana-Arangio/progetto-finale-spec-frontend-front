import { useState, useEffect } from "react";

function ViniPage() {

    const API_URL = import.meta.env.VITE_API_URL

    /**********
        HOOK
    ***********/
    const [vini, setVini] = useState([]);

    useEffect( () => {
        fetchVini();
    },[]);

    /************
        RENDER
    *************/
    return(
        <h1>ViniPage</h1>
    )

    /*************
        FUNZIONI
    **************/
    // Recupera la lista dei vini dall'API
    async function fetchVini() {
        try {
            const response = await fetch(`${API_URL}/wines`);

            if (!response.ok) {
                throw new Error(`tipo errore HTTP ${response.status}`);
            }

            const data = await response.json();
            setVini(data);
            console.log(data);
        }
        catch (error) {
            console.error("Errore nel fetch dei vini:", error.message);
        }
    }
}

export default ViniPage;