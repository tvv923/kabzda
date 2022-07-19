import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className={s.nav}>
        <div className={`${s.item} ${s.active}`}>
          <NavLink to='/profile' className={({ isActive }) => (isActive ? s.activeLink : '')}>Profile</NavLink>
        </div>
        <div className={s.item}>
          <NavLink to='/dialogs' className={({ isActive }) => (isActive ? s.activeLink : '')}>Messages</NavLink>
        </div>
        <div className={s.item}>
          <a>News</a>
        </div>
        <div className={s.item}>
          <a>Music</a>
        </div>
        <div className={s.item}>
          <a>Settings</a>
        </div>
      </nav>
  )
}
