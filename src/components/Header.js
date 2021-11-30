import { useContext } from 'react'
import AddEditInterface from './AddEditInterface'
import { addEditResourcesContext } from '../contexts/mainContext'
import infoMessage from '../helpers/infoMessage'
import cleanForm from '../helpers/cleanFrom'
import '../styles/Header.css'

export default function Header() {
  const { addEditInterface, toggleAddEditInterface } = useContext(addEditResourcesContext)

  return (
    <header className="appHeader">
      <h1 className="appHeader__h1">Titulo/Logo</h1>
      <input id="filterBox" className="appHeader__filterBox" type="text" placeholder="Filter..." />
      <button
        id="addButton"
        className="appHeader__addButton"
        onClick={() => {
          toggleAddEditInterface(true)
          setTimeout(() => {
            infoMessage('Add new resource')
            cleanForm()
          }, 0) //TODO: hacerlo con promesas
        }}
      >
        Add +
      </button>
      <AddEditInterface value={addEditInterface} />
    </header>
  )
}
