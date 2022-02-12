import React from "react";
import Link from "next/link";
import classes from "./NavigationBar.module.css";

type Props = {
  children: JSX.Element;
};

const NavigationBar = ({ children }: Props) => {
  return (
    <>
      <header className={classes.navigation}>
        <Link href={"/"}>
          <h1 className={classes.title}>Gamekins</h1>
        </Link>
        <ul className={classes.linksMenu}>
          <li className={classes.link}>
            <Link href={"/dbd-home"}>Stats By Daylight</Link>
          </li>
        </ul>
      </header>
      {children}
    </>
  );
};

export default NavigationBar;
