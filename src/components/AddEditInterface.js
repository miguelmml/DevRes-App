import { useContext } from 'react'
import { listOfLinksContext, addEditResourcesContext } from '../contexts/mainContext'
import { getData, setDataItem } from '../helpers/dbHandler'
import { getFormData } from '../helpers/getFormData'
import infoMessage from '../helpers/infoMessage'
import '../styles/AddEditInterface.css'

export default function AddEditInterface(props) {
  const { addEditInterface, toggleAddEditInterface } = useContext(addEditResourcesContext)
  const { setListOfLinks } = useContext(listOfLinksContext)

  if (props.value === true) {
    return (
      <form className="addEditInterface">
        <p id="addEditInterfaceInfo" className="addEditInterface__info"></p>
        <input id="addEditInterfaceId" type="hidden" value="" />
        <input
          id="addEditInterfaceTitle"
          className="addEditInterface__input addEditInterface__title"
          type="text"
          placeholder="Resource title"
        />
        <textarea
          id="addEditInterfaceDescription"
          className="addEditInterface__input addEditInterface__description"
          type="text"
          placeholder="Resource description"
        />
        <input
          id="addEditInterfaceUrl"
          className="addEditInterface__input addEditInterface__url"
          type="url"
          placeholder="Resource url"
        />
        <div className="addEditInterface__buttonsWrapper">
          <button
            className="addEditInterface__submit"
            onClick={(e) => {
              e.preventDefault()
              const data = getFormData()
              if (data) {
                setDataItem([data])
                setListOfLinks(getData())
                toggleAddEditInterface(!addEditInterface)
              } else {
                infoMessage('You need to fill out all inputs ❗')
              }
            }}
          >
            <svg className="addEditInterface__submit--svg" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
          <button
            className="addEditInterface__exit"
            onClick={(e) => {
              e.preventDefault()
              toggleAddEditInterface(!addEditInterface)
            }}
          >
            <svg className="addEditInterface__exit--svg" viewBox="0 0 24 24">
              <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </button>
        </div>
      </form>
    )
  }
  return null
}
