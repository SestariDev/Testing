import { useState } from "react"

function SuperForm() {
    
    const [Nome,setNome] = useState()
    const [Altura,setAltura] = useState()
    const [Peso,setPeso] = useState()


    function Enviar(e){
        e.preventDefault()
        console.log(`
        Os dados: Nome: ${Nome} Altura: ${Altura} Peso: ${Peso} 
        `)
    }

    function Limpar(e){
        setAltura('')
        setNome('')
        setPeso('')
        console.log(`
        Os dados: Nome: ${Nome} Altura: ${Altura} Peso: ${Peso} 
        `)
    }

    function user({nome,altura,peso}) {
        


    }


    return(
        <>
            <form>
                <label htmlFor="Nome">Nome</label>
                <input type="text" id="Nome" onChange={(e) => setNome(e.target.value)}></input>
                <label htmlFor="Altura">Altura</label>
                <input type="number" id="Altura" onChange={(e) => setAltura(e.target.value)}></input>
                <label htmlFor="Peso">Peso</label>
                <input type="number" id="Peso" onChange={(e) => setPeso(e.target.value)}></input>
                <button type="submit" onClick={Enviar}>Enviar</button>
                <button type="submit" onClick={Limpar}>Limpar</button>
            </form>
        </>
        
    )



}

export default SuperForm