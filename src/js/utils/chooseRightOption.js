import birdsData from '../data/birdsData';

// export default function chooseRightOption(page, randomIndex, setRight, decreasePoints) {
export default function chooseRightOption(page, randomIndex, setRight) {
  const list = document.querySelectorAll('.answers-list__item');
  list.forEach(item => {
    item.addEventListener('click', () => {
      if (item.querySelector('.answers-list__item-name').textContent === birdsData[page][randomIndex].name){
        item.querySelector('.answers-list__item-marker').classList.add('answers-list__item-marker_right');
        setRight();
      } else {
        item.querySelector('.answers-list__item-marker').classList.add('answers-list__item-marker_wrong');
        // decreasePoints();
      }
    })
  })
}