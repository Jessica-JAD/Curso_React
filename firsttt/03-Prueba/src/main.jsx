import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'

// Si no dejan crear el proyecto con react  se puede crear con Vanila e:
// * Instalar React
// * Instalar React Dom
// En el archivo que se crea [vite.confiig.js]
// poner 
        /*import { defineConfig } from 'vite'
          import react from '@vitejs/plugin-react-swc'

          // https://vitejs.dev/config/
          export default defineConfig({
            plugins: [react()],
          })
        */
// PUNTO DE ENTRADA DE LA APLICACION
//Es lo que esta en el index.html porque ahi pongo el script  
//con la direccion al punto de entrada de la app del main
// entonce en el main pones 
                          //import {createRooot} from 'react-dom/client'
                          // const root = ReactDOM.createRoot(document.getElementById('app'))
                          //              root.render(<h1> Hello</h1>)
// Esto dara un error xq no esta preparado para trabajar con jsx por lo q el archivo main tieenes q poner.jsx 
// instalar esto yarn add standard y pones en el pscksge.json
    /*"eslintConfig": {
      "extends": "./node_modules/standard/eslintrc"
    }*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
