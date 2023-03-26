import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from "./Menu.module.css";

function Menu() {
  const links = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "skills",
      path: "/skills",
    },
    {
      name: "project",
      path: "/project",
    },
    {
      name: "contact",
      path: "/contact"
    },
  ];

  return (
    <ul className={`${classes.menu} ${classes.show}`}>
      {links.map((link, index) => (
        <li className={classes["menu_link"]} key={index}>
          <NavLink className={({ isActive }) =>
            isActive ? `${classes["menu__item"]} ${classes["menu__item--active"]}` : classes["menu__item"]} to={`${link.path}`}>
            <span>0{index}</span>
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Menu