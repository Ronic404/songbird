import React from 'react';

export default function FamilyOfBirdsList() {
  const BIRD_FAMILY = [
    'Разминка',
    'Воробьиные',
    'Лесные птицы',
    'Певчие птицы',
    'Хищные птицы', 
    'Морские птицы'
  ];

  const listItems = BIRD_FAMILY.map((family) => 
    <li className="family-of-birds-list__item" key={family}>
      {family}
    </li>
  );

  return (
    <ul className="family-of-birds-list">{listItems}</ul>
  );
}