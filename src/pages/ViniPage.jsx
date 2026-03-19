import { useState, useEffect, useCallback, useMemo } from "react";
import { debounce } from "../utils/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import useApiContext from "../hooks/useApiContext"; 
import VinoCard from "../components/VinoCard";

function ViniPage() {

    // Categorie dei vini utilizzate per generare dinamicamente i bottoni dei filtri
    const categories = [
        { label: "TUTTI", value: "tutti" },
        { label: "ROSSI", value: "rosso" },
        { label: "BIANCHI", value: "bianco" },
        { label: "ROSATI", value: "rosato" }
    ];

    /***********
        HOOKS
    ************/
    const [categoria, setCategoria] = useState("tutti");
    const [ordinamento, setOrdinamento] = useState("titolo-crescente");
    const { fetchVini, vini, searchVinoByTitle, filterViniByCategory } = useApiContext();
    
    useEffect( () => {
        fetchVini();
    },[]);

    // Funzione di ricerca con debounce per evitare 
    // troppe chiamate API durante la digitazione
    const ritardaRicercaVino = useCallback(
        debounce(searchVinoByTitle, 400)
    ,[]);

    /******************
        ORDINAMENTI
    *******************/
    const viniOrdinati = useMemo(() => {

        const copiaVini = [...vini];

        // Ordinamento titolo crescente/decrescente
        if (ordinamento === "titolo-crescente") {
            copiaVini.sort((a, b) => a.title.localeCompare(b.title));
        } else {
            copiaVini.sort((a, b) => b.title.localeCompare(a.title));
        }

        return copiaVini;

    }, [vini, ordinamento]);

    /************
        RENDER
    *************/
    return(

        <>
            <div className="container-page" >

                {/* Barra di ricerca */}
                <div className="container-searchbar">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="icona-ricerca"/>
                    <input
                        type="text"
                        placeholder="Cerca un vino..."
                        onChange={e => ritardaRicercaVino(e.target.value)}
                        className="searchbar"
                    />
                </div>

                {/* Filtri e Ordinamenti */}
                <div className="container-filtri-e-ordinamenti">

                    {/* Bottoni filtraggio per Categoria */}
                    <div>
                        {categories.map(category => (
                            <button
                                key={category.value}
                                onClick={() => {
                                    setCategoria(category.value);
                                    filterViniByCategory(category.value);
                                }}
                                className={`btn-filtri ${categoria === category.value ? "active" : ""}`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>

                    {/* Selezione ordinamento per titolo */}
                    <div className="container-ordinamenti">
                        <select onChange={e => setOrdinamento(e.target.value)} className="select-ordinamenti" >
                            <option value="titolo-crescente"> TITOLO A-Z </option>
                            <option value="titolo-decrescente"> TITOLO Z-A </option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Linea divisoria */}
            <div className="linea-divisoria"></div>

            {/* Risultati vini filtrati */}
            <div className=" container-page container-vino-card">

                {/* Lista vini */}
                {viniOrdinati.length > 0 ? ( 
                    viniOrdinati.map( vino => (
                        <VinoCard
                            key={vino.id}
                            vino={vino}
                        />
                    ))
                ):(
                    <>
                        {/* Nessun vino trovato */}
                        <div className="container-centro-pagina container-page">

                            {/* immagine vino */}
                            <img src="/images/calice.png" alt="calice" className="calice" />

                            {/* Titolo + Descrizione */}
                            <h1>Nessun vino trovato</h1>
                            <p> Prova a cercare con un altro termine o cambia filtri</p>
                                    <div className="linea-decorativa-s"></div>
                            
                            {/* Bottone reset */}
                            <button
                                className="btn-indietro"
                                onClick={() => {
                                    setCategoria("tutti");
                                    setOrdinamento("titolo-crescente");
                                    searchVinoByTitle("");
                                }}
                            > 
                                ← TORNA INDIETRO
                            </button>                    
                        </div>
                    </>
                
                )}
            </div>
        </>
    )
}

export default ViniPage;