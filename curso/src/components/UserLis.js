function UserLis({id,nome,isAdmin}) {

    const Lista = ['Jose','Maria', 'Rocha']

    for (let index = 0; index < Lista.length; index++) {
        
    if (Lista[index] == 'Jose'){
        console.log(`Jose esta no indice ${index}`)
    }
    else{
        console.log("Jose nao pertence a esse array")
    }

    }

    

    return(
        console.log(`A lista tem o tamanho de ${Lista.length} indices`)
    )
}

export default UserLis