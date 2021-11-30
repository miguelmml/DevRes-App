import { Fragment } from 'react'
import Header from './Header'
import MainContent from './MainContent'
import { ListOfLinksContextProvider, AddEditResourcesContextProvider } from '../contexts/mainContext.js'
import '../styles/App.css'

function App() {
  return (
    <Fragment>
      <ListOfLinksContextProvider>
        <AddEditResourcesContextProvider>
          <Header />
          <MainContent />
        </AddEditResourcesContextProvider>
      </ListOfLinksContextProvider>
    </Fragment>
  )
}

export default App
