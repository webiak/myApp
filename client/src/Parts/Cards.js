import React from 'react';
import './Card.css';
import CardItem from './CardItem';

import Taj from '../images/tajDuk.jpg';
import Mis from '../images/misia.jpg';
import Myt from '../images/mytz.jpg';
import Ves from '../images/vesmir.jpg';


function Cards() {

  return (
    <div className='cards'>
      <h1>Pozri co je nove!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={Taj}
              text='Pravidla pre sutziacich'
              label='Nove pravidla'
              path=''
            />
            <CardItem
              src={Mis}
              text='ToDo List'
              label='Ulohy'
              path=''
            />
            <CardItem
              src={Myt}
              text='1. online kolo'
              label='Ulohy'
              path=''
            />
            <CardItem
              src={Ves}
              text='ToDo List'
              label='Ulohy'
              path=''
            />
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Cards;