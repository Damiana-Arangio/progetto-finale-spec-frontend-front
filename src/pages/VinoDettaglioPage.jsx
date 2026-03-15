import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApiContext from "../hooks/useApiContext";
import VinoDettaglioCard from "../components/VinoDettaglioCard";


function VinoDettaglioPage() {

    /***********
        HOOKS
    ************/
    const { id } = useParams();                         // Recupero id da url
    const { vino, fetchVino } = useApiContext();

    useEffect(() => {
        fetchVino(id);
    }, [id]);

    /************
        RENDER
    *************/
    return (
        vino && (
            <VinoDettaglioCard
                vino={vino}
            />
        )
    );
}

export default VinoDettaglioPage;