import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classNames from '../utilities/util'


const nav_items = [
    {name: 'Dashboard', href: '../console/dashboard'},
    {name: 'Plugins', href: '../console/plugins'},
    {name: 'Terminal', href: '../console/terminal'},
    {name: 'Editor', href: '../console/editor'},
    {name: 'Settings', href: '../console/settings'}
]


const console_layout: NextPage = (props) => {
    const currpath = useRouter().pathname
    return(
        <div className="Layout">
            <Head>
                <title>FBot - Console</title>
                <meta name="description" content="FBot Console"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <div className=" style.title_bar">
                <div className="style.logo">FBot</div>
                <div className="style.profile_button_dropdown">logout</div>
                <div className="style.user_logo">placeholder logo</div>
            </div>
            <div className="style.left_nav">
                {nav_items.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.href.replace('../', '/') == currpath? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium'
                        )}
                        aria-current={item.href.replace('../', '/') == currpath? 'page':undefined}>
                            {item.name}
                        </a>
                ))}
                <div className="style.language">Language</div>
            </div>

            <div className='style.console_main_window'>
                {props.children}
            </div>

            <footer className="style.footer">
                <div className="style.footer_box">Fishappy0 2022</div>
            </footer>
        </div>
    )
}

export default console_layout
