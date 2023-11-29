import React from 'react'
import style from '@/components/contact.module.css'

const contact = () => {
  return (
    <>
        <div className={style.main}>
            <div className={style.left}>
                <div className={style.leftinner}></div>
            </div>
            <div className={style.right}>
                <h1 className={style.rightheader}>CONTACT US</h1>
                <div className={style.rightinner}>
                  <div className={style.rightinnerleft}>
                  <form>
                    <label>
                      Full Name : <br/>
                      <input type='text' placeholder='Enter your name' name=''/>
                    </label>
                    <label>
                      Email: <br/>
                      <input type='email' placeholder='Enter your email' name=''/>
                    </label>
                    <label>
                      Message: <br/>
                      <input type='text' placeholder='' name=''/>
                    </label>
                    <button type='submit' className={style.b2}>Contact Us</button>
                  </form>
                  </div>
                  <div className={style.rightinnerright}>
                    <div className={style.rir1}>
                    <h1>Contact</h1> 
                    <h1>Vadik anusthanakm email address</h1>
                    </div>
                    <div className={style.rir2}> 
                    <h1>Based in</h1>
                    <h1>vadik anusthanam company address</h1>
                    </div>
                    <div className={style.rir3}>
                      <h1>ICON 1</h1>
                      <h1>ICON 2</h1>
                      <h1>ICON 3</h1>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default contact