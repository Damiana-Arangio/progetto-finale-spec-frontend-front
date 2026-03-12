import { useContext } from "react";
import { ConfrontoContext } from "../context/ConfrontoContext";

// Hook Personalizzato per utilizzare il context preferiti
function useConfrontoContext() {
    const context = useContext(ConfrontoContext)
    return context;
}

export default useConfrontoContext;