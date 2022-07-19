import React from 'react';
import s from './Post.module.css';

export const Post = (props) => {
 return (

            <div className={s.item}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrV5FwfY_rhAJ68NuJdR3Fy_smBGmMYup8Mw&usqp=CAU" />
              {props.message}
              <div>
              <span>{props.likesCount}</span>
              </div>
            </div>
  )
}
