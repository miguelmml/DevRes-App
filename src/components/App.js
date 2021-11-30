import { Fragment } from 'react'
import { AddButtonInterfaceProvider } from '../contexts/AddButtonInterfaceContext'
import { ListOfLinksContextProvider } from '../contexts/ListOfLinksContext'
import MainContent from './MainContent'
import Header from './Header'
import '../styles/App.css'

function App() {
  return (
    <Fragment>
      <ListOfLinksContextProvider>
        <AddButtonInterfaceProvider>
          <Header />
          <MainContent />
        </AddButtonInterfaceProvider>
      </ListOfLinksContextProvider>
    </Fragment>
  )
}

export default App
