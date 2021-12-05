import { useContext } from 'react'
import AddEditInterface from './AddEditInterface'
import { addEditResourcesContext, listOfLinksContext } from '../contexts/mainContext'
import infoMessage from '../helpers/infoMessage'
import cleanForm from '../helpers/cleanFrom'
import scrollListener from '../helpers/scrollListener'
import '../styles/Header.css'
import logo from '../images/logo.svg'
import slogo from '../images/logo-small.svg'

export default function Header() {
  const { addEditInterface, toggleAddEditInterface } = useContext(addEditResourcesContext)
  const { setFilterListOfLinks } = useContext(listOfLinksContext)

  scrollListener()

  return (
    <header className="appHeader">
      <h1 className="appHeader__h1">
        <img src={logo} className={'appHeader__h1--mLogo'} alt={'App logo'}></img>
      </h1>
      <img src={slogo} id={'hiddenImage'} className={'appHeader__h1--sLogo'} alt={'App logo'}></img>
      <div className="appHeader__interfaceWrapper">
        <svg className="appHeader__interfaceWrapper--svg" viewBox="0 0 135 9">
          <path d="M15.5,1 L121.5,1 L121.5,6 L119.5,8 L13.5,8 L13.5,3 L15.6,.95" />
        </svg>
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
          Add resource
        </button>
      </div>
      <AddEditInterface value={addEditInterface} />
    </header>
  )
}
