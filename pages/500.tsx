import { NextPage } from 'next'

const internal_error: NextPage = () => {
    return(
        <div className="placeholder">
           500 - We don't know what's wrong with the server yet! but We'll have a look 
        </div>
    )
}

export default internal_error