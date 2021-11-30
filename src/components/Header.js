import { useContext } from 'react'
import AddButtonInterfacecontext from '../contexts/AddButtonInterfaceContext'
import AddButtonInterface from './AddButtonInterface'
import '../styles/Header.css'

export default function Header() {
  const { buttonInterface, setButtonInterface } = useContext(
    AddButtonInterfacecontext
  )

  return (
    <header className="appHeader">
      <h1>Titulo/Logo</h1>
      <input
        type="text"
        placeholder="Filter..."
        id="filterBox"
        className="filterBox"
      />
      <button
        id="addButton"
        className="addButton"
        onClick={() => setButtonInterface(!buttonInterface)}
      >
        Add +
      </button>
      <AddButtonInterface value={buttonInterface} />
    </header>
  )
}
