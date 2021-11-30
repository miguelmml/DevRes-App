import React, { useState } from 'react'

const Context = React.createContext({})

export function AddButtonInterfaceProvider({ children }) {
  const [buttonInterface, setButtonInterface] = useState(false)

  return (
    <Context.Provider value={{ buttonInterface, setButtonInterface }}>
      {children}
    </Context.Provider>
  )
}

export default Context
