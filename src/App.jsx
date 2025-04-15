import { useEffect, useState } from "react"

function App() {
  const [fact, setFact] = useState()
  const [image, setImage] = useState()
  useEffect(()=>{
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data =>{
       const {fact }= data
        setFact(fact)
        
        const firstWord = fact.split(" ")[0]
        fetch(`https://cataas.com/cat/says/${firstWord}?json=true`)
        .then(res => res.json())
        .then(response => {
          const { url } = response
          setImage(url)
        })
      })
    },[])

  return (
    <main>
     <h1>App Gatitos</h1>
     {fact && <p>{fact}</p>}
     {image && <img src={image} alt={`Image extracted using first word for ${fact}`} />}
    </main>
  )
}

export default App
