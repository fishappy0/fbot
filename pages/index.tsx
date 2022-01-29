import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import style from '../styles/home.module.css'
import Link from 'next/link'

const index: NextPage = () => {
    return(
        <div className={style.container}>
            <Head>
                <title>FBot - Main</title>
                <meta name="description" content="Discord Bot Manager"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='style.title_bar'>
               <a className="style.title_container" href='..'>
                   <link rel="icon" href="/favicon.ico"/>
                   <Image src='/logo.webp' width={150} height={150}/>
                   <div className='style.title_text'>FBot</div>
               </a>
            </div>
            <div className="style.navbar">
                <a className="style.intro_buttons">What</a> 
                <a className="style.intro_buttons">Who</a>  
                <a className="style.intro_buttons">Why</a>  
                <a className="style.login_buttons">Register</a> 
                <a className="style.login_buttons">Login</a> 
                <div className="style.logo">userlogoplaceholder</div> //Replace with dropdown style of google login box
            </div>
            <div className="style.slogan">
                <div className="style.slogan_text">Modular | Dedicated</div>
                <div className="style.slogan_text">Discord Bot </div>
                <div className="style.slogan_text">Maker | Host</div>
            </div>
            <div className="style.language_container">
                <Image src="/language_icon.png" width={20} height={20}/>
                <div className='style.language_text'>Language</div> //Replace with an actual dropdown next plugin
            </div>
            <div className="style.dialouge_box">
                <div className="style.dialouge_title">What?</div>
                <div className="style.dialogue_text">The quick brown fox jumps over a lazy dog, lorem Ispum.</div>
            </div>
            <div className="style.dialouge_box">
                <div className="style.dialouge_title">Who?</div>
                <div className="style.dialogue_text">The quick brown fox jumps over a lazy dog, lorem Ispum.</div>
            </div>
            <div className="style.dialouge_box">
                <div className="style.dialouge_title">Why?</div>
                <div className="style.dialogue_text">The quick brown fox jumps over a lazy dog, lorem Ispum.</div>
            </div>
            <div className="style.dialouge_box">
                <div className="style.dialouge_title">General information</div>
                <div className="style.dialogue_text">The quick brown fox jumps over a lazy dog, lorem Ispum.</div>
            </div>

            <footer className="style.footer">
                <div className="style.footer_box">Fishappy0 2022</div>
            </footer>
        </div>
    )
}

export default index