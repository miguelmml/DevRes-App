import infoMessage from './infoMessage'

function editLink(event) {
  const itemData = getItemData(event)

  fillOutForm(itemData)
  return itemData
}

function getItemData(event) {
  const item = event.target.parentNode

  const data = {
    id: item.id,
    title: item.firstChild.textContent.slice(0, item.firstChild.textContent.length - 1),
    description: item.children[1].textContent,
    url: item.firstChild.href,
  }
  return data
}

function fillOutForm(data) {
  infoMessage('Editing resource...')

  document.getElementById('addEditInterfaceTitle').focus()
  document.getElementById('addEditInterfaceTitle').value = data.title
  document.getElementById('addEditInterfaceDescription').value = data.description
  document.getElementById('addEditInterfaceUrl').value = data.url
  document.getElementById('addEditInterfaceId').value = data.id
}

export default editLink
