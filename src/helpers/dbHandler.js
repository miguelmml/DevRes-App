export function getData() {
  //TODO: añadir un valor por defecto para cuando se haga una primera carga en la que todavia no hay nada en local storage.
  let data = []

  for (let i in localStorage) {
    if (localStorage.getItem(i)) {
      data.push(JSON.parse(localStorage.getItem(i)))
    }
  }

  return data
}

export function setDataItem([...args]) {
  console.log(args)
  args.forEach((item) => {
    localStorage.setItem(item.id, JSON.stringify(item))
  })
}

export function deleteDataItem(id) {
  localStorage.removeItem(id)
}
