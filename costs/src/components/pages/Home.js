import Container from '../nav/Container'
import styles from './Home.module.css'
import img from '../../img/savings.svg'
import DefaultButton from '../Buttons/DefaultButton'


function Home(props) {

    return(
        <Container>
            <h1 className={styles.titleContainer}>Bem vindo ao Costs</h1>
            
                <p>
                    Comece a gerenciar seus projetos agora mesmo
                </p>
            <DefaultButton to='./NewProject' text='Criar Projeto' /> 
             
            <img src={img} alt='Costs' height="30%" width="30%"></img>

        </Container>
    )
}

export default Home