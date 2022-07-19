import React from 'react';
import s from './ProfileInfo.module.css';

export const ProfileInfo = () => {
  return (
    <div >
        <div >
          <img src='https://media-cdn.tripadvisor.com/media/photo-s/0f/a6/65/38/sunrise-beach-hotel.jpg' alt='456'></img>
        </div>
        <div className={s.descriptionBlock}>
          Ava + Description
        </div>        
        
    </div>
  )
}
