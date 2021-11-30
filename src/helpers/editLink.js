export default function editLink(e) {
  /**
   * 1º capturamos el evento click en el boton editar   ✔
   * 2º obtenemos los datos del elemento clickado ✔
   * 3º abrimos la interfaz de AddButton y rellenamos los campos con los datos del paso anterior ✔
   * 4º setamos el id al recogido en los datos del elemento y no que cree uno nuevo ✔
   * 5º cambiamos el mensaje de Info de la interfaz de AddButton y hacemos focus en el elemento ✔
   */

  let itemData = getItemData(e)

  if (itemData) {
    fillOutForm(itemData)
  }

  return itemData
}

function getItemData(e) {
  const item = e.target.parentNode

  const data = {
    id: item.id,
    title: item.firstChild.textContent.slice(
      0,
      item.firstChild.textContent.length - 1
    ),
    description: item.children[1].textContent,
    url: item.firstChild.href,
  }
  return data
}

function fillOutForm(data) {
  document.getElementById('addButtonInterface__title').focus()
  document.getElementById('addButtonInterface__info').textContent =
    'Editing resource...'
  document.getElementById('addButtonInterface__title').value = data.title
  document.getElementById('addButtonInterface__description').value =
    data.description
  document.getElementById('addButtonInterface__url').value = data.url
  document.getElementById('addButtonInterface__id').value = data.id
}
