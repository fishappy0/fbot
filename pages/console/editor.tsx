import { NextPage } from 'next'
import Head from 'next/Head'
import Image from 'next/image'
import Layout from '../../assets/layouts/console_layout'

const editor: NextPage = () => {
    return(
        <Layout>
            <div className="style.editor">
                Main editor window here
            </div>
        </Layout>        
    )
}

export default editor