import {Link } from "react-router-dom";
import styles from './NavBar.module.css'
import logo from "../../img/costs_logo.png"

function NavBar() {
    return(
        <div className={styles.navContainer}>
            <ul className={styles.navUl}>
                <div>
                    <li>
                        <img src={logo} alt="Costs"></img>
                    </li>
                </div>
                <div className={styles.navItens}>
                    <li>
                        <Link to='/' className={styles.navLink}>Home</Link>
                    </li>
                    <li>
                        <Link to='/projetos' className={styles.navLink}>Projetos</Link>
                    </li>
                    <li>
                        <Link to='/empresa' className={styles.navLink}>Empresa</Link>
                    </li>
                    <li>
                        <Link to='/contato' className={styles.navLink}>Contato</Link>
                    </li>
                </div>
            </ul>
        </div>
    )
}

export default NavBar