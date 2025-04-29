import "./App.css"
import { useCatFact } from "./hooks/useCatFact"
import { useCatImage} from "./hooks/useCatImage"
import { useFactError } from "./hooks/useFactError"



function App() {
  const {error: factError, setError: setFactError}= useFactError()

  const {fact, getRandomFact} = useCatFact({setFactError})
  const {image} = useCatImage({fact, setFactError})
  
  const handleClick = () => {
    setFactError(null)
    getRandomFact()
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
