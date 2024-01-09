import React, { useEffect, useRef } from 'react'
import Productcat from '@/components/productscat'
import style from '@/components/offer.module.css'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


const offer = () => {
  
  return (

    <>
      <div id='g'  className={style.main}>
      <div id='left' className={style.left}>
          <h1 id='c' className={style.c}>
            C
          </h1>
        </div>
        <div className={style.right}>
        <div className={style.p1}>

        </div>
        <div className={style.p2}>
  
        </div>
        <div className={style.p3}>
  
        </div>
        <div className={style.p4}>
  
        </div>
      </div>
      </div>
      <Productcat></Productcat>
    </>
  )
}

export default offer

// import React from 'react'
// import style from './offer.module.css'

// const offer = () => {
//   return (
//     <>
//     <h1 className={style.mainheader}>OUR OFFERS</h1>
//         <div className={style.offer}>
//             <div className={style.offers}>
//                 <h1>VADIK ANUSTHNAM</h1>
//                 <h3>Sankal se Siddhi Tak</h3>
//             </div>
//             <div className={style.offers}>
//                 <h1>VADIK ANUSTHNAM</h1>
//                 <h3>Sankal se Siddhi Tak</h3>
//             </div>
//         </div>
//         <br/><br/><br/><br/>
//     </>
//   )
// }

// export default offer