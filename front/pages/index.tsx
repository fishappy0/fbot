import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import Link from 'next/link'
import joinClassName from '../assets/utilities/util'
import type { NextApiRequest, NextApiResponse } from 'next'

function swtich_themes(a: number){
    console.log('clicked!');
}

const intro_buttons = [
    {name: 'About'},
    {name: 'Documentation'},
    {name: 'Tutorial'},
    {name: 'Blog'},
]

const index: NextPage = () => {
    return( 
        <div className="bg-white dark:bg-neutral-900 min-h-screen min-w-screen"> {/* Main container */} 
            <Head>
                <title>FBot - Main</title>
                <meta name="description" content="Discord Bot Manager"/>
                <link rel="icon" href="/img/icon/favicon.ico"/>
            </Head>
            
            <div className='flex flex-col'> {/*Page Flex Alignment */}    
                <div className='flex-auto'> {/*Nav Clusters*/}
                    <div className='flex bg-indigo-700'> {/* Top title bar with logo and stuff */}
                       <div className='flex-auto'/>
                       <a className="flex-auto content-center" href='..'>
                           <div className='text-black text-center dark:text-white py-2'>
                              <Image className='flex-auto'  src='/img/icon/logo.webp' width={55} height={55}/>
                              <div className='font-sans text-2xl font-semibold'>FBOT</div>
                            </div>
                        </a>
                        <div className='flex-auto'/>
                    </div>

                    <div className="dark:text-white bg-indigo-900 flex px-5"> {/* Nav bar underneath it when on top page*/}
                        <div className="py-3 flex-auto">
                            {intro_buttons.map((item) => (
                                <a
                                    key={item.name}
                                    className={joinClassName(
                                       'text-white text-lg hover:text-indigo-400 text-white font-bold', 
                                       'px-3 py-2 rounded-md text-sm font-medium'
                                )}>
                                        {item.name}
                                </a>
                            ))}
                        </div>
                        <div className="py-3 login-cluster flex-initial content-end">
                          <a className="text-sky-400 bg-gray-900 text-lg hover:text-indigo-400 font-bold hove:text-white px-3 py-2 rounded-md text-sm font-medium" href="/account/register">Register</a>
                          <a className="px-2"> | </a> 
                          <a className="text-white text-lg hover:text-indigo-400 hove:text-white font-bold px-3 py-2 rounded-md text-sm font-medium" href="/account/login">Login</a> 
                          {/*<a className="style.logo px-2">userlogoplaceholder</a>*/}
                        </div>
                    </div> 
                </div>
                                    
                <div className='flex-auto text-center text-white text-3xl bg-neutral-800 py-20'> {/*intro cluster */}
                    <span className=''>
                        <div className='inline text-sky-400 font-bold px-3'>Modular</div> | 
                        <div className='inline text-indigo-400 font-bold px-3'>Dedicated </div>
                    </span>
                    <div className="font-bold pr-8">Discord Bot </div>
                    <span className="pr-8">
                        <div className='inline text-sky-400 font-bold px-3'>Maker</div>| 
                        <div className='inline text-indigo-400 font-bold px-3'>Host</div>
                    </span>
                    <div className="py-10"></div>
                    <a className='flex-initial font-bold bg-sky-400 rounded px-3 py-1 hover:bg-sky-600' href='/account/register'>Register Now!</a>
                </div>
                {/*                    
                     <div className="style.language_container">
                         <Image src="/language_icon.png" width={20} height={20}/>
                         <div className='style.language_text'>Language</div> Replace with an actual dropdown next plugin
                     </div>
                */}
                <div className='flex flex-col flex-auto text-center bg-neutral-700'>
                   {/*  <button onClick={swtich_themes} className='bg-neutral-700 font-bold py-1.5 px-3.5 rounded'>Switch Theme</button>*/}
                     <div className="flex py-4">
                         <div className="flex-initial pr-6"></div>
                         <div className="bg-gray-900 rounded px-8 py-5 pr-4 text-white font-bold">
                             <div className="text-left text-3xl pb-3 text-sky-400">What and Why ?</div>
                             The quick brown fox jumps over a lazy dog, lorem Ispum.
                        </div>
                         <div className="flex-1"></div>
                     </div>
                     <div className="bg-neutral-800 flex py-5">
                         <div className="flex-auto"></div>
                         <div className="bg-gray-900 rounded px-8 py-5 text-white font-bold">
                             <div className="text-center text-4xl pb-3 text-sky-400">Modular ?</div>
                             The quick brown fox jumps over a lazy dog, lorem Ispum.</div>
                         <div className="flex-auto"></div>
                     </div>
                     <div className="flex py-5">
                         <div className="flex-auto"></div>
                         <div className="flex-initial pr-5 bg-gray-900 rounded px-8 py-5 text-white font-bold">
                             <div className="text-right text-3xl pb text-sky-400">Dedicated ?</div>
                             The quick brown fox jumps over a lazy dog, lorem Ispum.
                        </div>
                        <div className="flex-initial pl-6"></div>
                     </div>

                </div>
            </div>
            <footer className="bg-indigo-800">
                <div className="font-bold text-white pl-5">Fishappy0© 2022</div>
            </footer>
        </div>
    )
}

export default index;