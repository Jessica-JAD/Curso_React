const CAT_ENDPOINT_RANDOMFACT = 'https://catfact.ninja/fact.com'

/*export const getRandomFact = () => {
    return fetch(CAT_ENDPOINT_RANDOMFACT) // devuelve una promesa
      .then(res => res.json())
      .them(data => {
        const { fact } = data
        return fact
      })
  }*/
  // lo mismo q arriba pero asincrono
    export const getRandomFact = async () => {
    const res = await fetch(CAT_ENDPOINT_RANDOMFACT)
    const data = await res.json()
    const { fact } = data
        return fact
  }