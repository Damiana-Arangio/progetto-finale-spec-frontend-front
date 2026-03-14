import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

// Hook Personalizzato per utilizzare il context Api
function useApiContext() {
    const context = useContext(ApiContext)
    return context;
}

export default useApiContext;