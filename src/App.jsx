import { useEffect, useState } from "react"

function App() {
  const [fact, setFact] = useState("")

  useEffect(()=>{
    fetch("https://catfact.ninja/fact")
      .then(res => res.json())
      .then(data => setFact(data.fact))
  },[])

  return (
    <main>
     <h1>App Gatitos</h1>
     <p>{fact}</p>
    </main>
  )
}

export default App
