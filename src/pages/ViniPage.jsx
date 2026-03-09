import { useState, useEffect, useCallback, useMemo } from "react";
import VinoCard from "../components/VinoCard";

function ViniPage() {

    const API_URL = import.meta.env.VITE_API_URL

    /**********
        HOOK
    ***********/
    const [vini, setVini] = useState([]);
    const [searchVino, setSearchVino] = useState("");
    const [categoria, setCategoria] = useState("tutti");

    useEffect( () => {
        fetchVini();
    },[]);

    // Chiamata funzione di debounce
    const funzioneRitardata = useCallback(
        debounce(setSearchVino, 400),
        []);


    /************
        FILTRI
    *************/
    const viniFiltrati = useMemo(() => {

        let copiaVini = [...vini];

        // Filtro di ricerca per titolo
        copiaVini = copiaVini.filter( vino => (
            vino.title.toLowerCase().includes(searchVino.toLowerCase())
        ))

        // Filtro categoria
        if (categoria !== "tutti") {
            copiaVini = copiaVini.filter(vino => vino.category === categoria);
        }

        return copiaVini;

    }, [vini, searchVino, categoria]);

    /************
        RENDER
    *************/
    return(

        <>
            {/* Barra di ricerca */}
            <input 
                type="text" 
                placeholder="Cerca un vino..."
                onChange={e => funzioneRitardata(e.target.value)}
            />

            {/* Bottoni filtraggio per Categoria */}
            <button onClick={() => setCategoria("tutti")} > Tutti </button>
            <button onClick={() => setCategoria("rosso")} > Vino Rosso </button>
            <button onClick={() => setCategoria("bianco")} > Vino Bianco </button>
            <button onClick={() => setCategoria("rosato")} > Vino Rosé </button>

            {/* Lista Vini */}
            <div className="container container-vino-card">
                {viniFiltrati.length > 0 ? ( 
                    viniFiltrati.map(vino => (
                        <VinoCard
                            key={vino.id}
                            vino={vino}
                        />
                    ))
                ) :(
                    <p className="nessun-risultato">Nessun vino trovato</p>
                )}
            </div>
        </>
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

    // Funzione di debounce generica
    function debounce(callback, delay) {
        let timer;

        // Funzione interna che verrà eseguita quando l'utente digita nella searchbar
        function funzioneRitardata(value) {

            // Se esiste già un timer attivo, lo cancello
            clearTimeout(timer);

            // Creo un nuovo timer
            timer = setTimeout(function () {
                callback(value);
            }, delay);
        }

        // Restituisco la funzione interna
        return funzioneRitardata;
    }
}

export default ViniPage;