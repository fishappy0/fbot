import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import style from '../styles/home.module.css'
import Layout from '../../assets/layouts/console_layout'

const plugins: NextPage = () => {
    return(
        <Layout>
            <div className='style.plugin'>
                Main Plugin window
            </div>
        </Layout>
    )
}

export default plugins