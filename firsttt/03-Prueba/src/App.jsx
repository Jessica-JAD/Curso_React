/*import { useState, useEffect } from 'react';


export function App() {
  const [fact, setFact] = useState()

  //Para el fetch de datos [API Fetch es una API nativa de JavaScript para realizar solicitudes HTTP]
  // esto se puede usar si no te dejan usar axios, React Query, swr

  //.then(): se ejecuta si la promesa se resuelve con éxito.
  //.catch(): se ejecuta si la promesa falla.
  //.finally(): se ejecuta después de que la promesa ha sido ejecutada (ya sea éxito o falla)
  useEffect(() => {
    // se pone en el arreglo cuando se quiere que se renderice el componente
    // si no pone arreglo se renderizara cada vez que se renderice el componente
    // dos them estan encadenandose 
    fetch('https://catfact.ninja/fact')
      .then(res => res.json())
      .then(data => {
        //setFact(data.fact))//hecho aleatorio
        const {fact}= data
        setFact(fact)
        const firstWord = fact.split('')[0] //split permite separar la cadena de texto a partir del token q se le diga 
                                      //en este caso en espacios y devuelve un array
                                      // si piden n cantidad de palabras: fact.split('').slice(0,n).join('') o fact.split('', 3)
      })
  }, [])

  return (
    <main>  
      <h1>App de Gatitos</h1>
      <section>
       <p>{fact}</p>
       imagUrl && <img src={'${la url va aqui}}${imagenUrl}'} alt={'Imagen de las tres primeras palabras'}/>
      </section>
      
    </main>
  )
}*/

// separar--- minimizar la anidacion
import { useState, useEffect } from 'react';
const CAT_PREFIX_IMAG_URL = 'https://cataas.com'

export function App() {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()
  const [factError, setFactErro] = useState()

  
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then(res =>{ 
        if (!res.ok)
        throw new Error('Errorr en la respuesta de la cita') 
      return res.json()})
      .them(data =>{
        const {fact}=data
        setFact(fact)
      })
      .catch ((error)=> {
        //solo si hay problemas con la peticion
      })
  }, [])

  //para recuperar la imagen
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split('', 3).join('')
    fetch('https://cataas.com/cat/says/${threeFirstWord}?size= json=true')
      .then(res => res.json())
      .them(response =>{
        const {url}=response
        setImageUrl(url)
      })
  }, [fact])

  return (
    <main>  
      <h1>App de Gatitos</h1>
      <section>
       <p>{fact}</p>
       imagUrl && <img src={'${CAT_PREFIX_IMAG_URL}}${imagenUrl}'} alt={'Imagen de las tres primeras palabras'}/>
      </section>
      
    </main>
  )


/*
import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}*/
