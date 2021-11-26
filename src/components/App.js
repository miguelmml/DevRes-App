import { Fragment } from 'react'
import ListOfLinks from './ListOfLinks'
import Header from './Header'
import * as data from '../bbdd.json'
import '../styles/App.css'

let linksData = data.default

function App() {
  return (
    <>
      <Header />
      <ListOfLinks data={linksData} />
    </>
  )
}

export default App
