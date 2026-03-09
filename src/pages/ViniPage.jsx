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
    const [ordinamento, setOrdinamento] = useState("titolo-crescente")

    useEffect( () => {
        fetchVini();
    },[]);

    // Chiamata funzione di debounce
    const funzioneRitardata = useCallback(
        debounce(setSearchVino, 400),
        []);


    /*************************
        FILTRI E ORDINAMENTI
    **************************/
    const viniFiltratiEOrdinati = useMemo(() => {

        let copiaVini = [...vini];

        // Filtro titolo (searchbar)
        copiaVini = copiaVini.filter( vino => (
            vino.title.toLowerCase().includes(searchVino.toLowerCase())
        ))

        // Filtro categoria
        if (categoria !== "tutti") {
            copiaVini = copiaVini.filter(vino => vino.category === categoria);
        }

        // Ordinamento titolo crescente/decrescente
        if (ordinamento === "titolo-crescente") {
            copiaVini.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            copiaVini.sort((a, b) => b.title.localeCompare(a.title));
        }

        return copiaVini;

    }, [vini, searchVino, categoria, ordinamento]);

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
            <button onClick={() => setCategoria("rosso")} > Rossi </button>
            <button onClick={() => setCategoria("bianco")} > Bianchi </button>
            <button onClick={() => setCategoria("rosato")} > Rosati </button>

            {/* Selezione ordinamento per titolo */}
            <select
                onChange={ e => setOrdinamento(e.target.value)}
            >
                <option value="titolo-crescente"> Titolo A-Z </option>
                <option value="titolo-decrescente"> Titolo Z-A </option>
            </select>

            {/* Lista Vini */}
            <div className="container container-vino-card">
                {viniFiltratiEOrdinati.length > 0 ? ( 
                    viniFiltratiEOrdinati.map(vino => (
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