import React from 'react'
import style from '@/components/mainsec.module.css'
import Nav2 from '@/components/nav2'


const mainsec = () => {
  return (
    <>
    <Nav2></Nav2>
      <div className={style.main}>
        <div className={style.mainleft}>
          <h1>O</h1>
          <div className={style.mainleftinner}>
            <h1>welcome to</h1>
            <h1>vaidik anusthanam</h1>
            <h1>Where Sacred Traditions Blend with Spiritual Transition</h1>
          </div>
        </div>
        <div className={style.mainright}>
          <h2>O</h2>
        <div className={style.mainrightinner}>
            <h1>welcome to</h1>
            <h1>vaidik anusthanam</h1>
            <h1>Where Sacred Traditions Blend with <br/> Spiritual Transition</h1>
          </div>
          <video className={style.vid} controls autoPlay muted loop>
      <source src='./videomain3.mp4' type="video/mp4"/>
    </video>
    <h1>M</h1>
        </div>
      </div>
    </>
  )
}

export default mainsec