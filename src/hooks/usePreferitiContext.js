import { useContext } from "react";
import { PreferitiContext } from "../context/PreferitiContext";

// Hook Personalizzato per utilizzare il context preferiti
function usePreferitiContext() {
    const context = useContext(PreferitiContext)
    return context;
}

export default usePreferitiContext;