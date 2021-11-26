import '../styles/Header.css'

export default function Header() {
  return (
    <header className="appHeader">
      <h1>Titulo/Logo</h1>
      <input
        type="text"
        placeholder="Filter..."
        id="filterBox"
        className="filterBox"
      />
      <button id="addButton" className="addButton">
        Add +
      </button>
    </header>
  )
}
