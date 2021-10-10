import React from "react";
import Profile from "./../../Images/Hacker.jpg";
import { NavLink } from "react-router-dom";
import Instagram from "./../../Images/Icons/Inst.png";
import Twitter from "./../../Images/Icons/Twitter.png";
import Viber from "./../../Images/Icons/Viber.png";
import YouTube from "./../../Images/Icons/YouTube.png";
import classes from "./Header.module.css";
const navigation = [
  {
    title: "Home",
    url: "/Profile",
    id: 1
  },
  {
    title: "Friends",
    url: "/Friends",
    id: 2
  },
  {
    title: "Messages",
    url: "/Messages",
    id: 3
  },
  {
    title: "Skills",
    url: "/Skills",
    id: 4
  },
  {
    title: "Education",
    url: "/Education",
    id: 5
  },
  {
    title: "Experience",
    url: "/Experience",
    id: 6
  },
  {
    title: "Work",
    url: "/Work",
    id: 7
  },
  {
    title: "Blog",
    url: "/Blog",
    id: 8
  },
  {
    title: "Contact",
    url: "/Contact",
    id: 9
  },
];
const social = [
  {
    icon: Instagram,
    id: 1
  },
  {
    icon: Twitter,
    id: 2
  },
  {
    icon: Viber,
    id: 3
  },
  {
    icon: YouTube,
    id: 4
  }
];
const Header = (props) => {
  return (
    <div className={classes.navigation}>
      <div className={classes.profile}>
        <img src={Profile} alt="Profile Photo" />
      </div>
      <div className={classes.description}>
        <h1>{props.name}</h1>
        <p>
          {props.skill} from <span>{props.city}</span>
        </p>
      </div>
      <nav className={classes.links}>
        <ul>
          <li>
            {navigation.map((link) => {
              return <NavLink to={link.url} key={link.id}>{link.title}</NavLink>;
            })}
          </li>
        </ul>
      </nav>
      <div className={classes.social}>
        <a href="#">
          {social.map((i) => {
            return <img src={i.icon} key={i.id}/>;
          })}
        </a>
      </div>
    </div>
  );
};

export default Header;
