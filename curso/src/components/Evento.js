
function Evento({numero}){

    function click(){
        console.log(`Caguei no pau ${numero}`);
    }

    return(
        <>
            <h1>A vida é gay</h1>
            <button onClick={click}>Clique</button>
        </>
    )

}

export default Evento 