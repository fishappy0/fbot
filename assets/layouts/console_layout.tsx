import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import style from '../styles/home.module.css'

const console_layout: NextPage = (props) => {
    return(
        <div className="Layout">
            <Head>
                <title>FBot - Console</title>
                <meta name="description" content="FBot Console"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <div className="style.title_bar">
                <div className="style.logo">FBot</div>
                <div className="style.profile_button_dropdown">logout</div>
                <div className="style.user_logo">placeholder</div>
            </div>

            <div className="style.left_nav">
                <a className="style.left_nav_buttons" href='../console/dashboard'>Dashboard</a>
                <a className="style.left_nav_buttons" href='../console/plugins'>Plugins</a>
                <a className="style.left_nav_buttons" href='../console/terminal'>Terminal</a>
                <a className="style.left_nav_buttons" href='../console/editor'>Editor</a>
                <a className="style.left_nav_buttons" href='../console/settings'>Settings</a>
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
