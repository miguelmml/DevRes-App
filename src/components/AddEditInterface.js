import { useContext } from 'react'
import { listOfLinksContext, addEditResourcesContext } from '../contexts/mainContext'
import { getData, setDataItem } from '../helpers/dbHandler'
import { getFormData } from '../helpers/getFormData'
import infoMessage from '../helpers/infoMessage'

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
          className="addEditInterface__title"
          type="text"
          placeholder="Resource title"
        />
        <input
          id="addEditInterfaceDescription"
          className="addEditInterface__description"
          type="text"
          placeholder="Resource description"
        />
        <input
          id="addEditInterfaceUrl"
          className="addEditInterface__url"
          type="url"
          placeholder="Resource url"
        />
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
              infoMessage('You need to fill out all inputs')
            }
          }}
        >
          Add resource ➡
        </button>
        <button
          className="addEditInterface__exit"
          onClick={(e) => {
            e.preventDefault()
            toggleAddEditInterface(!addEditInterface)
          }}
        >
          ❌
        </button>
      </form>
    )
  }
  return null
}
