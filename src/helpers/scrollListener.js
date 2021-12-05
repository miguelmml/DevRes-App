export default function scrollListener() {
  return window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
      document.getElementById('hiddenImage').style.opacity = '1'
    } else {
      document.getElementById('hiddenImage').style.opacity = '0'
    }
  })
}
