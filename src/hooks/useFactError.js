import { useState } from "react";

export function useFactError(){
    const [error, setError]= useState(null)
    const clearError = () => setError(null)
    
    return {error,setError,clearError}
}