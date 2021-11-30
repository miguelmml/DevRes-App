import '../styles/ListOfLinks.css'
import { deleteDataItem, getData } from '../helpers/dbHandler'
import listOfLinksContext from '../contexts/ListOfLinksContext'
import AddButtonInterfaceContext from '../contexts/AddButtonInterfaceContext'
import { useContext } from 'react'
import editLink from '../helpers/editLink'

export default function ListOfLink(props) {
  console.log('ListOfLinks render')

  const { setListOfLinks } = useContext(listOfLinksContext)

  const { setButtonInterface } = useContext(AddButtonInterfaceContext)

  return (
    <ul
      className="listOfLinks"
      onClick={(e) => {
        if (e.target.className === 'listOfLinksItem__editButton') {
          setButtonInterface(true)
          setTimeout(() => editLink(e), 0) //TODO: hacerlo con promesas
        }
      }}
    >
      ---------- ul ----------
      {props.data.map((element) => {
        return (
          <li className="listOfLinksItem" id={element.id} key={element.id}>
            <a href={element.url} target="_blank" rel="noreferrer">
              {element.title}
            </a>
            <p>{element.description}</p>
            <button className="listOfLinksItem__editButton">✏</button>
            <button
              className="listOfLinksItem__delButton"
              onClick={(e) => {
                console.log(e.currentTarget.parentNode.id)
                const foo = window.confirm(
                  `Are you sure to delete this resource "${e.currentTarget.parentNode.firstChild.textContent}"`
                )
                if (foo) {
                  deleteDataItem(e.currentTarget.parentNode.id)
                  setListOfLinks(getData())
                } else {
                  console.log('delete canceled')
                }
              }}
            >
              ❌
            </button>
          </li>
        )
      })}
    </ul>
  )
}
