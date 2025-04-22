import { useEffect, useState } from "react"
import "./App.css"
import { getRandomFact } from "./services/facts"

function useCatImage ({fact}){
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


function App() {
  const [fact, setFact] = useState()
  const [factError, setFactError] = useState()
  const {image} = useCatImage({fact})

  useEffect(()=>{
    getRandomFact().then(setFact)
    },[])

  

  const handleClick = async ()=>{
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
       
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt={`Image extracted using first word for ${fact}`} />}
        
      </section>
    </main>
  )
}

export default App
