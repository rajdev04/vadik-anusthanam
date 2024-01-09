'use client'
import React, { useEffect, useRef } from 'react'
import style from './aboutus.module.css'
import Nav from '@/components/Nav'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const wraper = useRef(null)
  const tl = useRef();

  useEffect(()=>{
    let ctx = gsap.context(()=>{
      // ScrollTrigger.create({
      //   target: '#main',
      //   markers: true,
      //   pin: true,
      //   scrub: true,
      //   start: '5%',
      //   end: '+=3000'
      // })
      tl.current = gsap.timeline()
      .to('#main',{scrollTrigger:{
        target: '#mainin',
        markers: true,
        start: '5%',
        end: '+=3000',
        pin: true ,
        scrub: true
      }})
    }, wraper)
    return () => ctx.revert;
  },[]);

  return (
    <>
     <div id='main' ref={wraper}>
      <div  className={style.main}>
      <Nav></Nav>
       <div id='mainin' className={style.maininner}>
       <div className={style.options}>
        <div className={style.option}>
          <h1>1</h1>
        </div>
        <div className={style.option}>
          <h1>2</h1>
        </div>
        <div className={style.option}>
          <h1>3</h1>
        </div>
        <div className={style.option}>
          <h1>4</h1>
        </div>
      </div>
       <h1> ABOUT <span>US</span></h1>
        <div className={style.im1}></div>
        <div className={style.header}>
          <h1> Welcome to Vaidik Anushthanam – <br/> <span>Your Initial Initiated Gateway for Spiritual Fulfillment!</span> </h1> <br/>
          <h1> At Vaidik Anushthanam, we embark on a sacred odyssey that transcends every time and space, and here we offer myriad top-notch services that are solely aimed at enriching your spiritual experience in every aspect. Deeply rooted in ancient Vedic traditions, we are constantly dedicated to quenching the spiritual thirst of seekers around the globe.  </h1> <br/>
          <h1> We are driven by a profound commitment to enriching the spiritual lives of individuals worldwide. Our journey is rooted in ancient Vedic traditions, and our main mission is to bridge the gap between these timeless practices and the modern world. Our online services whether you seek solace or blessings, our rituals bring spirituality to your doorstep.  </h1> <br/>
          <h1> We are here to celebrate your Life's Milestones. From birth to marriage and beyond, we honour and guide you through the sacred Sanskars that mark life's pivotal moments. With us, you can explore the mystic realms of Vedic astrology and numerology to gain profound insights into your life's path. Moreover, through our Pilgrimage Journeys, you can embark on sacred spiritual odysseys where you can connect with the divine. </h1> <br/>
        </div>
        <button className={style.b3}>Explore more</button>
       </div>
       <div className={style.maininner}>
       <div className={style.options}>
        <div className={style.option}>
          <h1>1</h1>
        </div>
        <div className={style.option}>
          <h1>2</h1>
        </div>
        <div className={style.option}>
          <h1>3</h1>
        </div>
        <div className={style.option}>
          <h1>4</h1>
        </div>
      </div>
       <h1> OUR <span>MISSION</span></h1>
        <div className={style.im1}></div>
        <div className={style.header}>
          <h1> We constantly strive for a global spiritual elevation that fosters  unity, cultivates understanding, and bestows peace. By providing a promising platform for young emerging gurukul Brahmins, we thrive in securing and sustaining our ancient Sanatan Dharma. By toiling on transparency in our organic Orthodox Poojas, our mission is to clarify the spiritual paths for the devotees in their upliftment, and we ensure that no unsatisfied souls wander, all while preserving the authenticity of sacred traditions.</h1> <br/>
          {/* <h1> At Vaidik Anushthanam, we embark on a sacred odyssey that transcends every time and space, and here we offer myriad top-notch services that are solely aimed at enriching your spiritual experience in every aspect. Deeply rooted in ancient Vedic traditions, we are constantly dedicated to quenching the spiritual thirst of seekers around the globe.  </h1> <br/> */}
          {/* <h1> We are driven by a profound commitment to enriching the spiritual lives of individuals worldwide. Our journey is rooted in ancient Vedic traditions, and our main mission is to bridge the gap between these timeless practices and the modern world. Our online services whether you seek solace or blessings, our rituals bring spirituality to your doorstep.  </h1> <br/> */}
          {/* <h1> We are here to celebrate your Life's Milestones. From birth to marriage and beyond, we honour and guide you through the sacred Sanskars that mark life's pivotal moments. With us, you can explore the mystic realms of Vedic astrology and numerology to gain profound insights into your life's path. Moreover, through our Pilgrimage Journeys, you can embark on sacred spiritual odysseys where you can connect with the divine. </h1> <br/> */}
        </div>
       </div>
       <div className={style.maininner}>
       <div className={style.options}>
        <div className={style.option}>
          <h1>1</h1>
        </div>
        <div className={style.option}>
          <h1>2</h1>
        </div>
        <div className={style.option}>
          <h1>3</h1>
        </div>
        <div className={style.option}>
          <h1>4</h1>
        </div>
      </div>
       <h1> OUR <span>VISION</span></h1>
        <div className={style.im1}></div>
        <div className={style.header}>
          <h1>We envision a world where spirituality is the essence of life, meticulously guiding devotees towards their inner peace and enlightenment. We regularly aspire to create a spiritual sphere Where Sacred Traditions Blend with Spiritual Transition. As a sacred guiding light on your spiritual journey, we imbibe that our ancient wisdom meets your modern convenience, and where your connection to the divine is enriched, which leads you to a more profound and fulfilling life. Join us at Vaidik Anushthanam as we embark on this sacred quest together.</h1> <br/>
          {/* <h1> At Vaidik Anushthanam, we embark on a sacred odyssey that transcends every time and space, and here we offer myriad top-notch services that are solely aimed at enriching your spiritual experience in every aspect. Deeply rooted in ancient Vedic traditions, we are constantly dedicated to quenching the spiritual thirst of seekers around the globe.  </h1> <br/>
          <h1> We are driven by a profound commitment to enriching the spiritual lives of individuals worldwide. Our journey is rooted in ancient Vedic traditions, and our main mission is to bridge the gap between these timeless practices and the modern world. Our online services whether you seek solace or blessings, our rituals bring spirituality to your doorstep.  </h1> <br/>
          <h1> We are here to celebrate your Life's Milestones. From birth to marriage and beyond, we honour and guide you through the sacred Sanskars that mark life's pivotal moments. With us, you can explore the mystic realms of Vedic astrology and numerology to gain profound insights into your life's path. Moreover, through our Pilgrimage Journeys, you can embark on sacred spiritual odysseys where you can connect with the divine. </h1> <br/> */}
        </div>
       </div>
       <div className={style.maininner}>
       <div className={style.options}>
        <div className={style.option}>
          <h1>1</h1>
        </div>
        <div className={style.option}>
          <h1>2</h1>
        </div>
        <div className={style.option}>
          <h1>3</h1>
        </div>
        <div className={style.option}>
          <h1>4</h1>
        </div>
      </div>
       <h1>WHY CHOOSE US?</h1>
        <div className={style.im1}></div>
        <div className={style.header}>
          <h1> Welcome to Vaidik Anushthanam – <br/> <span>Your Initial Initiated Gateway for Spiritual Fulfillment!</span> </h1> <br/>
          <h1>In a world swinging between chaos and choices, everybody carries a deep desire for liberation. Each one of us wants to be free. Free from what? Free from physical ailments, mental instability, emotional burdens, energy vampires, and financial insecurity. As spiritual seekers, we are left with two choices: repeat or evolve!</h1> <br/>
          <h1> Selecting the former is a mundane choice, but opting for the latter is a prudent, aware decision that can change your life in various aspects. If you are travelling on a different, unknown terrain, opting for an experienced guide will be a prudent choice, as it will reduce your time and mental burden. Similarly, for your spiritual evolution, selecting the right partner is paramount. This is where Vaidik Anushthanam stands out as your unrivaled choice for all your sacred needs. Our match is unparalleled because we provide, </h1> <br/>
          <h1></h1> <br/>
        </div>
       </div>
      </div>
      </div>
    </>
  )
}

export default page