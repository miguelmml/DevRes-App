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
      <button
        className="PRUEBAS"
        onClick={() => {
          let arr = [{ name: 'E' }, { name: 'B' }, { name: 'A' }, { name: 'D' }, { name: 'F' }, { name: 'C' }]
          console.log(arr)
          let orderedArr = arr.sort(function (a, b) {
            if (a.name > b.name) {
              return 1
            }
            if (a.name < b.name) {
              return -1
            }
            // a must be equal to b
            return 0
          })
          console.log(orderedArr)
        }}
      >
        PRUEBAS
      </button>
      <AddEditInterface value={addEditInterface} />
    </header>
  )
}
