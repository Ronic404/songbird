import birdsData from '../data/birdsData';
import error from '../../assets/sounds/error.mp3';
import right from '../../assets/sounds/right.mp3';

export default function chooseRightOption(page, randomIndex, setRight, isRight, getId) {
  const list = document.querySelectorAll('.answers-list__item');
  const markerSounds = document.querySelector('#marker-sounds');
  list.forEach(item => {
    item.addEventListener('click', () => {
      // console.log(isRight)
      getId(item.getAttribute('id'))
      if(!isRight) {
        if (item.querySelector('.answers-list__item-name').textContent === birdsData[page][randomIndex].name){
          item.querySelector('.answers-list__item-marker').classList.add('answers-list__item-marker_right');
          item.querySelector('.answers-list__item-marker').classList.remove('answers-list__item-marker_wrong');
          markerSounds.setAttribute('src', right);
          setRight();
        } else {
          item.querySelector('.answers-list__item-marker').classList.add('answers-list__item-marker_wrong');
          item.querySelector('.answers-list__item-marker').classList.remove('answers-list__item-marker_right');
          markerSounds.setAttribute('src', error);
        }
      }      
    })
  })
}