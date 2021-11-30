import { useContext } from 'react'
import AddButtonInterfaceContext from '../contexts/AddButtonInterfaceContext'
import ListOfLinksContext from '../contexts/ListOfLinksContext'
import { getFormData } from '../helpers/getFormData'
import { getData, setDataItem } from '../helpers/dbHandler'

export default function AddButtonInterface(props) {
  const { buttonInterface, setButtonInterface } = useContext(
    AddButtonInterfaceContext
  )
  const { setListOfLinks } = useContext(ListOfLinksContext)

  if (props.value === true) {
    return (
      <form className="addButtonInterface">
        <p className="addButtonInterface__info" id="addButtonInterface__info">
          Save a new resource.
        </p>
        <input
          id="addButtonInterface__id"
          name="prodId"
          type="hidden"
          value=""
        />
        <input
          className="addButtonInterface__title"
          id="addButtonInterface__title"
          type="text"
          placeholder="Resource title"
        />
        <input
          className="addButtonInterface__description"
          id="addButtonInterface__description"
          type="text"
          placeholder="Resource description"
        />
        <input
          className="addButtonInterface__url"
          id="addButtonInterface__url"
          type="url"
          placeholder="Resource url"
        />
        <button
          className="addButtonInterface__submit"
          onClick={(e) => {
            e.preventDefault()
            const data = getFormData()
            console.log(data)
            if (data) {
              setDataItem([data])
              setListOfLinks(getData())
              setButtonInterface(!buttonInterface)
            } else {
              document.getElementById('addButtonInterface__info').textContent =
                'You need to fill out all inputs'
            }
          }}
        >
          Add resource ➡
        </button>
        <button
          className="addButtonInterface__exit"
          onClick={(e) => {
            e.preventDefault()
            setButtonInterface(!buttonInterface)
          }}
        >
          ❌
        </button>
      </form>
    )
  }
  return null
}
