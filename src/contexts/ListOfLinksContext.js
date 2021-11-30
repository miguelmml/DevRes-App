import React, { useState } from 'react'
import { getData } from '../helpers/dbHandler'

const Context = React.createContext({})

export function ListOfLinksContextProvider({ children }) {
  const [listOfLinks, setListOfLinks] = useState(getData())

  return (
    <Context.Provider value={{ listOfLinks, setListOfLinks }}>
      {children}
    </Context.Provider>
  )
}

export default Context
