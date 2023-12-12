import { useState } from "react"

function Renderif() {
    const [userEmail, setUserEmail] = useState()
    const [Email,setEmail] = useState()


    function enviarEmail(e) {
        e.preventDefault()
        setUserEmail(Email)
        console.log(userEmail)
    }

    function limparEmail() {
        setUserEmail('')
    }
    
    return(
        <div>
            <h2>Cadastre Seu email</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
                <button onClick={enviarEmail} type="submit">Enviar</button>
            </form>
            
            {userEmail && (
                <div>
                    <h1>O email foi preenchido</h1>
                    <button onClick={limparEmail}>Limpar Email</button>
                </div>

            )
            
            }
        </div>
    )

}

export default Renderif