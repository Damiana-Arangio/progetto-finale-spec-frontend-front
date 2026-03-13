import VinoCard from "../components/VinoCard";
import usePreferitiContext from "../hooks/usePreferitiContext";

function PreferitiPage() {

    /**********
        HOOK
    ***********/
    const { preferiti, svuotaListaPreferiti } = usePreferitiContext();

    /************
        RENDER
    *************/
    return(

        <>
            <div className="preferiti-header container-page">
                <button onClick={svuotaListaPreferiti} className="btn-svuota-preferiti">
                    Svuota Lista
                </button>
            </div>

            {/* Lista Preferiti */}
            <div className=" container-page container-vino-card">
                {preferiti.length > 0 ? ( 
                    preferiti.map( vino => (
                        <VinoCard
                            key={vino.id}
                            vino={vino}
                        />
                    ))
                ) :(
                    <p className="nessun-risultato">Nessun vino aggiunto!</p>
                )}
            </div>
        </>
    )
}

export default PreferitiPage;