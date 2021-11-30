export default function cleanForm() {
  document.getElementById('addEditInterfaceTitle').focus()
  document.getElementById('addEditInterfaceTitle').value = ''
  document.getElementById('addEditInterfaceDescription').value = ''
  document.getElementById('addEditInterfaceUrl').value = ''
  document.getElementById('addEditInterfaceId').value = ''
}
