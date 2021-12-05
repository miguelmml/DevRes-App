import { useContext } from 'react'
import { listOfLinksContext, addEditResourcesContext } from '../contexts/mainContext'
import { getData, deleteDataItem } from '../helpers/dbHandler'
import editLink from '../helpers/editLink'
import '../styles/ListOfLinks.css'

import Swal from 'sweetalert2'

export default function ListOfLink(props) {
  const { setListOfLinks } = useContext(listOfLinksContext)
  const { toggleAddEditInterface } = useContext(addEditResourcesContext)

  console.log('listOfLinks rendering..')

  return (
    <ul
      className="listOfLinks"
      onClick={(e) => {
        if (e.target.id === 'listOfLinksItem__editButton') {
          toggleAddEditInterface(true)
          setTimeout(() => editLink(e), 0) //TODO: hacerlo con promesas
        } else if (e.target.id === 'listOfLinksItem__deleteButton') {
          // const deleteConfirm = window.confirm(
          //   `Are you sure you want to delete this resource? "${e.target.parentNode.firstChild.textContent}"`
          // )
          // if (deleteConfirm) {
          //   deleteDataItem(e.target.parentNode.id)
          //   setListOfLinks(getData())
          // }
          Swal.fire({
            title: 'Are you sure to delete this resource?',
            text: `${e.target.parentNode.firstChild.textContent}`,
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#227461',
            cancelButtonColor: '#eb427d',
            confirmButtonText: 'Delete',
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Deleted!', 'The resource has been deleted.', 'success')
              deleteDataItem(e.target.parentNode.id)
              setListOfLinks(getData())
            }
          })
        }
      }}
    >
      {props.data.map((element) => {
        if (element.id === 'dbEmpty') {
          return <li className="listOfLinks__noItems">There is no resource, add one.</li>
        }

        let regExp = new RegExp(props.filter, 'i')

        if (regExp.test(element.title) || regExp.test(element.description)) {
          return (
            <li className="listOfLinksItem" id={element.id} key={element.id}>
              <a href={element.url} className="listOfLinksItem__a" target="_blank" rel="noreferrer">
                {element.title}
              </a>
              <p className="listOfLinksItem__p">{element.description}</p>
              <button
                id="listOfLinksItem__editButton"
                className="listOfLinksItem__editButton listOfLinksItem__buttons"
              >
                <svg className="listOfLinksItem__buttons--svg" viewBox="0 0 24 24">
                  <path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                </svg>
              </button>
              <button
                id="listOfLinksItem__deleteButton"
                className="listOfLinksItem__deleteButton listOfLinksItem__buttons"
              >
                <svg className="listOfLinksItem__buttons--svg" viewBox="0 0 24 24">
                  <path d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </button>
            </li>
          )
        }
        return null
      })}
    </ul>
  )
}
