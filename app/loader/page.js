import React from 'react'
import style from '@/app/loader/loader.module.css'

const page = () => {
  return (
    <>
        <div className={style.loaderstart}>
            <div className={style.l1}>
                {/* <img src='./shivbal1.png' alt=''/> */}
            </div>
            <div className={style.l2}>
            {/* <img src='./balhanu.png' alt=''/> */}
            </div>
            <div className={style.l3}>
            {/* <img src='./krnbal1.png' alt=''/> */}
            </div>
            <div className={style.l4}>
            {/* <img src='./krnbal3.png' alt=''/> */}
            </div>
            <h1 className={style.mainheader}>ॐ नमः शिवाय</h1>
            <div className={style.secondaryheader}>
            <h2 className={style.secondaryheaderinner}><span> Vaidik Anushthanam</span></h2>
            </div>
            <h3 className={style.tagline}> संकल्प से सिद्धि तक</h3>
        </div>
    </>
  )
}

export default page