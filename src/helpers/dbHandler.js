export function getData() {
  let data = []

  for (let i in localStorage) {
    if (localStorage.getItem(i)) {
      data.push(JSON.parse(localStorage.getItem(i)))
    }
  }

  if (data.length === 0) {
    data.push({ id: 'dbEmpty' })
  }
  return data
}

export function setDataItem([...args]) {
  args.forEach((item) => {
    localStorage.setItem(item.id, JSON.stringify(item))
  })
}

export function deleteDataItem(id) {
  localStorage.removeItem(id)
}
