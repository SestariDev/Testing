import styles from './Message.module.css'
import {useState, useEffect} from 'react'

function Message({type, msg}) {
    const [visible, setVisible] = useState(false)
    //use effect sempre com 2 parametros e um little function
    useEffect(()=> {
        if(!msg){
            setVisible(false)
            return
        }
        //se existe mensagem 
        setVisible(true)
        //define o tempo que vai alterar o valor
        const timer = setTimeout(() =>{
            setVisible(false)
        },1000)
        //limpa o valor do timer
        return() => clearTimeout(timer)
    }

    , msg)
   return(

    <>
        {visible && ( 
            <div className={`${styles.message} ${styles[type]}`}>
                <p>{msg}</p>
            </div>
        )}  
    </>
   )
}

export default Message