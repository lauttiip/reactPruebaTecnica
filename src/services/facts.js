export const getRandomFact = async (setFactError) => {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    
    if (!res.ok) {
    setFactError("No se ha podido recuperar la cita");
    return null
  }
  const data = await res.json();
  const { fact } = data;
  return fact;

} catch (error){
    console.log(error)
    setFactError("error al conectar con la api")
    return null 
  }
};
