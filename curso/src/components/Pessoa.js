import styles from './Pessoa.module.css'


function Pessoa({nome, idade, dinheiro}){

    return(
        <div>
            <h1 className={styles.TextoContainer}>
                Nome: {nome}
            </h1>
            <h1>
                Idade: {idade}
            </h1>
            <h1>
                Dinheiro{dinheiro}
            </h1>
        </div>
        
    )

}

export default Pessoa