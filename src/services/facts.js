export const getRandomFact = async ()=>{
    const res = await fetch("https://catfact.ninja/fact")
    if (!res.ok) {
        setFactError("No se ha podido recuperar la cita")
    }
    const data = await res.json()
    const { fact } = data
    return fact
  }