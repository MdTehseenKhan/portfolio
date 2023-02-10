import { createContext, useContext } from "react"

const Context = createContext()

export const useC = () => useContext(Context)

export const Provider = ({ children }) => {
  return <Context.Provider value={{}}>{children}</Context.Provider>
}
