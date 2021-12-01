import { useContext } from 'react'
import AddEditInterface from './AddEditInterface'
import { addEditResourcesContext, listOfLinksContext } from '../contexts/mainContext'
import infoMessage from '../helpers/infoMessage'
import cleanForm from '../helpers/cleanFrom'
import '../styles/Header.css'

export default function Header() {
  const { addEditInterface, toggleAddEditInterface } = useContext(addEditResourcesContext)
  const { setFilterListOfLinks } = useContext(listOfLinksContext)

  return (
    <header className="appHeader">
      <h1 className="appHeader__h1">Titulo/Logo</h1>
      <input
        id="filterBox"
        className="appHeader__filterBox"
        type="text"
        placeholder="Filter..."
        //TODO: optimizar
        onChange={(e) => {
          setTimeout(() => {
            setFilterListOfLinks(e.target.value)
          }, 600)
        }}
      />
      <button
        id="addButton"
        className="appHeader__addButton"
        //TODO: hacerlo con promesas
        onClick={() => {
          toggleAddEditInterface(true)
          setTimeout(() => {
            infoMessage('Add new resource')
            cleanForm()
          }, 0)
        }}
      >
        Add +
      </button>
      <AddEditInterface value={addEditInterface} />
    </header>
  )
}
