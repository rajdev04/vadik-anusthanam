import React from 'react'
import style from '@/components/nav2.module.css'
import Link from 'next/link'

const nav2 = () => {
  return (
    <>
      <div className={style.main}>
      <div className={style.left}></div>
        <div className={style.right}>
        <Link className={style.lafter} href='/'>Home</Link>
         <Link className={style.lafter} href='/aboutus'>about us</Link>
         <Link className={style.lafter} href='/media'>media gallery</Link>
         <Link className={style.lafter} href='/ourservices'>our services</Link>
         <Link className={style.lafter} href='/contactus'>contactus</Link>
         <Link className={style.lafter} href='/profile'>profile icon</Link>
        </div>
      </div>
    </>
  )
}

export default nav2