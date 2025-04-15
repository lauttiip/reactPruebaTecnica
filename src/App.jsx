import { useEffect, useState } from "react"
import "./App.css"

function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  const [factError, setFactError] = useState()
  useEffect(()=>{
    fetch("https://catfact.ninja/fact")
      .then(res => {
        if(!res.ok){
          setFactError("No se ha podido recuperar la cita")
        }
        return res.json()
      })
      .then(data =>{
       const {fact }= data
        setFact(fact)})
    },[])

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
  })

  return (
    <main>
      <h1>App Gatitos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt={`Image extracted using first word for ${fact}`} />}
        
      </section>
    </main>
  )
}

export default App
