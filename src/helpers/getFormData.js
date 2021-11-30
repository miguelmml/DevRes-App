import { uuid } from 'uuidv4'

export function getFormData() {
  const data = {
    id: document.getElementById('addEditInterfaceId').value
      ? document.getElementById('addEditInterfaceId').value
      : uuid(),
    title: document.getElementById('addEditInterfaceTitle').value + ':',
    description: document.getElementById('addEditInterfaceDescription').value,
    url: document.getElementById('addEditInterfaceUrl').value,
  }

  //TODO: hacer una validacion de los campos mas especifica
  if (data.id !== '' && data.title !== '' && data.description !== '' && data.url !== '') {
    return data
  } else {
    return false
  }
}
