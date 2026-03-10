import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VinoDettaglioCard from "../components/VinoDettaglioCard";

function VinoDettaglioPage() {
    const API_URL = import.meta.env.VITE_API_URL;

    // Recupero id e converto in intero
    const {id} = useParams();
    const idNumber = parseInt(id);

    /**********
        HOOK
    ***********/
    const [vino, setVino] = useState(null);

    useEffect(() => {
        fetchVino();
    }, [idNumber]);

    /************
        RENDER
    *************/
    return (
        vino ? (
            <VinoDettaglioCard 
                vino={vino} 
            />
        )
        :(
            <p>Loading...</p>
        )
    );

    /*************
        FUNZIONI
    **************/

    // Recupera vino con id ricevuto dall'API
    async function fetchVino() {
        try {
            const response = await fetch(`${API_URL}/wines/${idNumber}`);

            if (!response.ok) {
                throw new Error(`tipo errore HTTP ${response.status}`);
            }

            const data = await response.json();

            setVino(data.wine);
        }

        catch (error) {
            console.error("Errore nel fetch del vino:", error.message);
        }
    }
}

export default VinoDettaglioPage;