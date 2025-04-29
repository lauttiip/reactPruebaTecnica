import { useEffect, useState } from "react"

export function useCatImage({ fact, setFactError }) {
  const [image, setImage] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(" ")[0]
    
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Network response was not ok")
        }
        return res.json()
      })
      .then(response => {
        setImage(response.url)
      })
      .catch(err => {
        console.error(err)
        setFactError("No se ha podido recuperar la imagen")
      })

  }, [fact, setFactError]) 
  return { image }
}