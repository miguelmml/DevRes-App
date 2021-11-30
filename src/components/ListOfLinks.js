import { useContext } from 'react'
import { listOfLinksContext, addEditResourcesContext } from '../contexts/mainContext'
import { getData, deleteDataItem } from '../helpers/dbHandler'
import editLink from '../helpers/editLink'
import '../styles/ListOfLinks.css'

export default function ListOfLink(props) {
  const { setListOfLinks } = useContext(listOfLinksContext)
  const { toggleAddEditInterface } = useContext(addEditResourcesContext)

  return (
    <ul
      className="listOfLinks"
      onClick={(e) => {
        if (e.target.className === 'listOfLinksItem__editButton') {
          toggleAddEditInterface(true)
          setTimeout(() => editLink(e), 0) //TODO: hacerlo con promesas
        } else if (e.target.className === 'listOfLinksItem__deleteButton') {
          const deleteConfirm = window.confirm(
            `Are you sure you want to delete this resource? "${e.target.parentNode.firstChild.textContent}"`
          )
          if (deleteConfirm) {
            deleteDataItem(e.target.parentNode.id)
            setListOfLinks(getData())
          }
        }
      }}
    >
      ---------- ul ----------
      {props.data.map((element) => {
        if (element.id === 'dbEmpty') {
          return <li className="noItems">Add your first resource</li>
        }

        return (
          <li className="listOfLinksItem" id={element.id} key={element.id}>
            <a href={element.url} target="_blank" rel="noreferrer">
              {element.title}
            </a>
            <p>{element.description}</p>
            <button className="listOfLinksItem__editButton">✏</button>
            <button className="listOfLinksItem__deleteButton">❌</button>
          </li>
        )
      })}
    </ul>
  )
}
