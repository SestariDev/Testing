import { Link } from 'react-router-dom'
import styles from './DefaultButton.module.css'

function DefaultButton({to,text}){
    
    return(
        <Link to={to} className={styles.linkButton}>
            {text}
        </Link>
    )
}

export default DefaultButton