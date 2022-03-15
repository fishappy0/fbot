import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import style from '../styles/home.module.css'
import Layout from '../../assets/layouts/console_layout'

const dashboard: NextPage = () => {
    return(
        <Layout>
            <div className='style.dashboard'>
                Main dashboard window here
            </div>
        </Layout>        

    )
}

export default dashboard