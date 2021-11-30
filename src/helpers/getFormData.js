import { uuid } from 'uuidv4'

export function getFormData() {
  const data = {
    id: document.getElementById('addButtonInterface__id').value
      ? document.getElementById('addButtonInterface__id').value
      : uuid(),
    title: document.getElementById('addButtonInterface__title').value + ':',
    description: document.getElementById('addButtonInterface__description')
      .value,
    url: document.getElementById('addButtonInterface__url').value,
  }

  console.log('getfromdata >> ', data)

  if (
    data.id !== '' &&
    data.title !== '' &&
    data.description !== '' &&
    data.url !== ''
  ) {
    return data
  } else {
    return false
  }
}
