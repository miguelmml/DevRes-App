import React, { useState } from 'react'
import { getData } from '../helpers/dbHandler'

export const listOfLinksContext = React.createContext({})

export function ListOfLinksContextProvider({ children }) {
  const [listOfLinks, setListOfLinks] = useState(getData())
  const [filterListOfLinks, setFilterListOfLinks] = useState(undefined)

  return (
    <listOfLinksContext.Provider
      value={{ listOfLinks, setListOfLinks, filterListOfLinks, setFilterListOfLinks }}
    >
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
