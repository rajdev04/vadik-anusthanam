import React from 'react'
import style from './login.module.css'

const page = () => {
  return (
    <>
        <div className={style.main}>
        <div className={style.overlay}></div>
            <div className={style.card}>
                <div className={style.top}>
                    <h1>VADIK ANUSTHANAM</h1>
                    {/* <img src='./preview3 white.png'/> */}
                </div>
                <div className={style.middle}>
                    <form>
                        <label>
                            Username or Email: <br/>
                            <input name='' placeholder='Enter your email' type='email'/>
                        </label>
                        <br/>
                        <label>
                            Password: <br/>
                            <input name='' placeholder='Enter your password' type='text'/>
                        </label>
                        <button className={style.b1} type='submit'>Login</button>
                    </form>
                </div>
                <div className={style.bottom}>
                    GOOGLE 
                </div>
            </div>
            <div className={style.overlaymain}></div>
        </div>
    </>
  )
}

export default page