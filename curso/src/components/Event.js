import styles from './Event.module.css'
import Button from './button'

function Event(){

    var text = "Meu deus do creu"
    
    function clicarBotao(){
    console.log('Botao 1')
    }

    return(
        <div>
            <Button event={clicarBotao()} text = {text} />
        </div>
    )


}



export default Event