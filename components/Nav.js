import React from "react";
import style from "./nav.module.css"
import Link from "next/link";

const Nav = () => {
  return <>
  <div className={style.nav}>
    <div className={style.navleft}>
      <h1>vaidik anusthanam</h1>
    </div>
    <div className={style.navright}>
          <Link href='/'>Home</Link>
         <Link href='/aboutus'>about us</Link>
         <Link href='/media'>media gallery</Link>
         <Link href='/ourservices'>our services</Link>
         <Link href='/contactus'>contactus</Link>
         <Link href='/profile'>profile icon</Link>
    </div>
  </div>
  </>
};

export default Nav;
