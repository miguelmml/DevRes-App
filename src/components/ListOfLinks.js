import '../styles/ListOfLinks.css'

export default function ListOfLink(props) {
  console.log('>>>>>>>>>', props)

  return (
    <ul className="listOfLinks">
      ---------- ul ----------
      {props.data.map((element) => {
        return (
          <li
            className="listOfLinksItem"
            key={element.id}
            categories={element.categories}
          >
            <a href={element.url} target="_blank" rel="noreferrer">
              {element.title}
            </a>
            <p>{element.description}</p>
          </li>
        )
      })}
    </ul>
  )
}
