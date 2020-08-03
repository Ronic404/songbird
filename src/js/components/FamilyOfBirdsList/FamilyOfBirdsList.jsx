/* eslint-disable react/prop-types */
import React from 'react';

export default function FamilyOfBirdsList(props) {
  const BIRD_FAMILY = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы', 
    'Морские птицы'
  ];

  

  const listItems = BIRD_FAMILY.map((family, index) => {
    const className = (index === props.page) 
      ? "family-of-birds-list__item family-of-birds-list__item_active" : "family-of-birds-list__item";

    return <li className={className} key={family}>
      {family}
    </li>
  });

  return (
    <ul className="family-of-birds-list">
      {listItems}
    </ul>
  );
}