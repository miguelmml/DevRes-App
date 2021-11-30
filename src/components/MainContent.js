import ListOfLinks from './ListOfLinks'
import { useContext } from 'react'
import listOfLinksContext from '../contexts/ListOfLinksContext'

export default function MainContent() {
  const { listOfLinks } = useContext(listOfLinksContext)

  return <ListOfLinks data={listOfLinks} />
}
