import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import style from '../styles/home.module.css'

const login: NextPage = () => {
    return(
        <div className={style.container}>
            <Head>
                <title>FBot - Login</title>
                <meta name="description" content="Discord Bot Manager"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='style.login_box'>
                <div className='style.logo_box'>
                    <div className='style.logo_icon'></div> //Replace with img
                    <div className='style.logo_text'>FBot</div> 
                </div>
                <div className='style.login_box_title'>Username</div>
                <div className='style.login_box'>
                    <div className='style.login_box_icon'></div> //Replace with img
                    <div className='style.login_box_text'>Gamer</div> //Randomized text here
                </div>
                <div className='style.login_box_title'>Password</div>
                    <div className='style.login_box_icon'></div> //Replace with img
                    <div className='style.login_box_text'>********</div> //Randomized text here
                <div className='style.login_box'></div>

                <div className='style.register_button'>Register</div> //Replace with link
                <div className='style.login_button'>Login</div> //Replace with submit button
                <div className='style.spacing_line'>-------</div>
                <div className='style.google_button'>Login with google</div>
            </div>
            
            <div className='style.language_container'>
                <div className='style.language_text'>Language</div> //Replace with drop down menu
                <div className='style.language_icon'></div> //Replace with img
            </div>
        </div>
    )
}

export default login