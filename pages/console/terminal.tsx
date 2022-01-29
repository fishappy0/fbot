import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import style from '../styles/home.module.css'
import Layout from '../../assets/layouts/console_layout'

const terminal: NextPage = () => {
    return(
        <Layout>
            <div className='style.terminal'>
                Main terminal window here
            </div>
        </Layout>        

    )
}

export default terminal