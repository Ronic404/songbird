export default function setDefaultMarkers() {
  const list = document.querySelectorAll('.answers-list__item-marker');
  list.forEach(item => {
    item.classList.remove('answers-list__item-marker_right', 'answers-list__item-marker_wrong');
  })
}
