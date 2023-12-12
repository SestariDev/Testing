import { Link } from 'react-router-dom'
import DefaultButton from '../Buttons/DefaultButton'
import styles from './CardProjects.module.css'

import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function CardProject({id, name, category, orcamento, handleRemove}) {

    const Remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    }

    return(
        <div className={styles.projectCard}>
            <h2 className={styles.cardTitle}>
                {name}
            </h2>
            <h4>
               <span className={`${styles.categBall} ${styles[category.toLowerCase()]}`}> </span>
                {category}
            </h4>
            <p>
                <span>Orçamento: </span>
                {`R$ ${orcamento}`}
            </p>
            <div className={styles.buttonForm}>
                <span>
                    <Link to='/'>Editar <BsPencil/></Link>    
                </span>
                <span>
                    <button onClick={Remove}>Remover <BsFillTrashFill/></button>   
                </span>
            </div>
        </div>
    )
}

export default CardProject


