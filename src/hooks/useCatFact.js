import { useState, useCallback, useEffect } from "react"
import { getRandomFact as fetchRandomFact } from "../services/facts"

export function useCatFact({setFactError}) {
  const [fact, setFact] = useState()

  const getRandomFact = useCallback(async () => {
    try {
      const data = await fetchRandomFact()
      setFact(data)
    } catch (error) {
      setFactError("No se pudo obtener el dato del gato.")
    }
  }, [setFactError])

  useEffect(() => {
    getRandomFact()
  }, [getRandomFact])

  return { fact, getRandomFact }
}