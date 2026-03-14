import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import VinoDettaglioCard from "../components/VinoDettaglioCard";

function VinoDettaglioPage() {
    const API_URL = import.meta.env.VITE_API_URL;

    // Recupero id e converto in intero
    const { id } = useParams();

    /**********
        HOOK
    ***********/
    const [vino, setVino] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchVino();
    }, [id]);

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
            const response = await fetch(`${API_URL}/wines/${id}`);

            if (!response.ok) {
                throw new Error(`Errore HTTP ${response.status}`);
            }
            
            const data = await response.json();

            if (!data.success) {
                throw new Error(data.message);
            }

            setVino(data.wine);
        }

        catch (error) {
            console.error("Errore nel fetch del vino:", error.message);
            navigate('/404'); 
        }
    }
}

export default VinoDettaglioPage;