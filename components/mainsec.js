"use client"
import React, { createRef, useEffect, useRef } from 'react'
import style from '@/components/mainsec.module.css'
import Nav2 from '@/components/nav2'
import {motion , useMotionValueEvent, useScroll, scroll, animate} from 'framer-motion'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const mainsec = () => {

  return (
    <>
    <Nav2></Nav2>
      <div className={style.main}>
      <div className={style.mainleft}>
          <div   className={style.mustneeded}>
                  <motion.h1 initial={false} animate={{opacity: 1, x:500}} transition={{duration: 1}} className={style.gg}>O</motion.h1>
                  <div className={style.mainleftinner}>
                    <h1 id='t1' className={style.card} >welcome to</h1>
                    <h1 id='t2' className={style.card} >vadik anusthanam</h1>
                    <h1 id='t3' className={style.card} >Where Sacred Traditions Blend with Spiritual Transition</h1>
                  </div>
          </div>
        </div>
        <div   className={style.mainright}>
          <video  className={style.vid} controls autoPlay muted loop>
          <source src='./videomain3.mp4' type="video/mp4"/>
          </video>
          <div  className={style.innerright1}>
            <div className={style.random1}>
            <h1 id='gg1' className={style.hehe}> M </h1>
            </div>
          </div>
        </div>
      </div>
    </>
    //    <Nav2></Nav2>
    //    <div className={style.main}>
    //    <div className={style.mainleft}>
    //        <motion.div variants={wrapvariant} initial='hidden' animate='visible' className={style.mustneeded}>
    //                <motion.h1 variants={secondvariants}>O</motion.h1>
    //                <div className={style.mainleftinner}>
    //                  <motion.h1 variants={firstvariant} >welcome to</motion.h1>
    //                  <motion.h1 ref={haha} variants={firstvariant}>vadik anusthanam</motion.h1>
    //                  <motion.h1 variants={firstvariant}>Where Sacred Traditions Blend with Spiritual Transition</motion.h1>
    //                </div>
    //        </motion.div>
    //      </div>
    //      <motion.div variants={wrapvariant} initial='hidden' animate='visible' className={style.mainright}>
    //        <video variants={forthvariants} className={style.vid} controls autoPlay muted loop>
    //        <source src='./videomain3.mp4' type="video/mp4"/>
    //        </video>
    //        <motion.div  className={style.innerright1}>
    //          <motion.h1 variants={thirdvariants} initial='hidden' animate='visible'> M </motion.h1>
    //        </motion.div>
    //      </motion.div>
    //    </div>
    //  </>
  )
}

export default mainsec