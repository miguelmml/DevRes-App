import { useContext } from 'react'
import ListOfLinks from './ListOfLinks'
import { listOfLinksContext } from '../contexts/mainContext'

export default function MainContent() {
  const { listOfLinks, filterListOfLinks } = useContext(listOfLinksContext)

  return <ListOfLinks data={listOfLinks} filter={filterListOfLinks} />
}
