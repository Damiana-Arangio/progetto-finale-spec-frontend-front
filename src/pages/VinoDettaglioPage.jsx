import { useParams } from "react-router-dom";

function VinoDettaglioPage() {
    const {id} = useParams();
    
    console.log("id: ", id);

    return(
        <h1>VinoDettaglioPage</h1>
    )
}

export default VinoDettaglioPage;