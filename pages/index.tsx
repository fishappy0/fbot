import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import Link from 'next/link'
import classNames from '../assets/utilities/util'

function swtich_themes(e){
    console.log('clicked!');
}

const intro_buttons = [
    {name: 'Who'},
    {name: 'What'},
    {name: 'Why'},
]

const index: NextPage = () => {
    return( 
        <div className="py-12 bg-white dark:bg-gray-900"> {/* Main container */} 
            <button onClick={swtich_themes} className='bg-sky-700 font-bold py-1.5 px-3.5 rounded'>Switch Theme</button>
            <Head>
                <title>FBot - Main</title>
                <meta name="description" content="Discord Bot Manager"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className='w-50'> {/* Top title bar with logo and stuff */}
               <a className="style.title_container" href='..'>
                   <link rel="icon" href="/favicon.ico"/>
                   <Image className='content-center'  src='/logo.webp' width={50} height={50}/>
                   <div className='style.title_text'>FBot</div>
               </a>
            </div>
            <div className="dark:text-white"> {/* Nav bar underneath it when on top page*/}
                {intro_buttons.map((item) => (
                    <a
                        key={item.name}
                        className={classNames(
                           'text-black hover:bg-blue-700 hover:text-white', 
                           'px-3 py-2 rounded-md text-sm font-medium'
                    )}>
                            {item.name}
                    </a>
                ))}
                <a className="text-black hover:bg-gray-600 hove:text-white px-3 py-2 rounded-md text-sm font-medium">Register</a>
                <a className="px-2"> | </a> 
                <a className="text-black hover:bg-gray-600 hove:text-white px-3 py-2 rounded-md text-sm font-medium">Login</a> 
                <div className="style.logo">userlogoplaceholder</div> {/*Replace with dropdown style of google login box*/}
            </div>
            <div className="style.slogan">
                <div className="style.slogan_text">Modular | Dedicated</div>
                <div className="style.slogan_text">Discord Bot </div>
                <div className="style.slogan_text">Maker | Host</div>
            </div>
            <div className="style.language_container">
                <Image src="/language_icon.png" width={20} height={20}/>
                <div className='style.language_text'>Language</div> {/*Replace with an actual dropdown next plugin*/}
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