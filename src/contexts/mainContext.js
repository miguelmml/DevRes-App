import React, { useState } from 'react'
import { getData } from '../helpers/dbHandler'

export const listOfLinksContext = React.createContext({})

export function ListOfLinksContextProvider({ children }) {
  const [listOfLinks, setListOfLinks] = useState(getData())

  return (
    <listOfLinksContext.Provider value={{ listOfLinks, setListOfLinks }}>
      {children}
    </listOfLinksContext.Provider>
  )
}

export const addEditResourcesContext = React.createContext({})

export function AddEditResourcesContextProvider({ children }) {
  const [addEditInterface, toggleAddEditInterface] = useState(false)

  return (
    <addEditResourcesContext.Provider value={{ addEditInterface, toggleAddEditInterface }}>
      {children}
    </addEditResourcesContext.Provider>
  )
}
