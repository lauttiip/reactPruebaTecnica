import { useEffect, useState } from "react"


export function useCatImage ({fact, setFactError}){
  const [image, setImage] = useState()
  useEffect(()=>{
    if(!fact) return
    const firstWord = fact.split(" ")[0]
    fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
    .then(res =>{
      if(!res.ok){
      setFactError("No se ha podido recuperar la cita")
    }
    return res.json()
    })
    .then(response => {
      const { url } = response
      setImage(url)
    })
  }, [fact])
  return {image}
}
