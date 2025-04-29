import { useEffect, useState } from "react"
import "./App.css"
import { getRandomFact } from "./services/facts"
import { useCatImage } from "./hooks/useCatImage"



function App() {
  const [fact, setFact] = useState()
  const [factError, setFactError] = useState()
  const {image} = useCatImage({fact, setFactError})

  useEffect(()=>{
    getRandomFact(setFactError).then(setFact)
    },[])

  

  const handleClick = async ()=>{
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>App Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {factError && <p>{factError}</p>}
      <section>
       
        {fact && <p>{fact}</p>}
        {image && <img src={image} alt={`Image extracted using first word for ${fact}`} />}
        
      </section>
    </main>
  )
}

export default App
