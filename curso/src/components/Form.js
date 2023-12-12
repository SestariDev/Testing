import { useState } from "react";
import styles from './Form.module.css'

function Form(){
    function cadastrarUsuario(e){
        e.preventDefault()
        //Ignora qualquer logica de recarregamento de página
        console.log(name)
        console.log(senha)
        console.log(`Usuario ${name} foi cadastrado com a senha ${senha}`)
    }

    const[name,setName] = useState('Jorge')
    const[senha,setSenha] = useState('****')
 

    return(
     <div>
        <h1>Meu cadastro</h1>
        <form onSubmit={cadastrarUsuario}>
            <label htmlFor="name" className={styles.jorge}>Qual seu nome?</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor="senha">Qual sua senha?</label>
            <input type="text" id="senha" name="senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>

            <input type="submit" name="enviar"></input>
        </form>
     </div>  

    )

}

export default Form
