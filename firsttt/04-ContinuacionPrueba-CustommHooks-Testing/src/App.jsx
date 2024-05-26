//castom hooks es utilizar logica de un componente en otro
import './App.css'
import { useCatImage } from './hooks/useCatFact.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Otro } from './Components/Otro.jsx'

/*
//antes de ponerlo en un componente
const useCatFact = () =>{
  const [fact, setFact] = useState()
  const refreshFact =()=>{
  getRandomFact().then(setFact)
  }
// recuperar Cita al cargar la pagina
useEffect(() => {refreshFact}, [])
return {fact, refreshFact}
}
 */
/*Antes de ponerlo en un componente
//creando un castonHooks tine que empezar con use
  //*No puede estar dentro de un if, un while
  //*siempre llamado desde el cuerpo del componente
function useCatImage ({fact}) {
  const [imageUrl, setImageUrl] = useState()

  //para recuperar la imagen
  useEffect(() => {
    if (!fact) return
    const threeFirstWord = fact.split('', 3).join('')
    fetch(`https://cataas.com/cat/says/${threeFirstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .them(response => {
        const { url } = response
        setImageUrl(url)
      })
  }, [fact])
  return {imageUrl}
}*/

export function App() {
  const {fact, refreshFact} = useCatFact()
  const {imageUrl} =useCatImage({fact})
  
  const handleClick = async () => {
    refreshFact()
  }

  return (
    // boton para refescar
    <main>
      <h1>App de Gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imageUrl && <img src={imageUrl}
        alt={`Imagen de las tres primeras palabras de ${fact} `} />}
        <Otro/>
    </main>
  )
}