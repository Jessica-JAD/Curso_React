import { createContext } from 'react'

//Crea el contexto
export const FiltersConstext = createContext()

//Crear Provider
export function FiltersProvier({ children }) {
    return (
        <FiltersConstext.Provider value={{
            category: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersConstext.Provider>
    )
}