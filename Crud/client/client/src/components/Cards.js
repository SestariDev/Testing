
function Cards({id,name,category,cost}){
    return (
        <div id={id}>
              <h2>{name}</h2>
              <h3>{category}</h3>
              <h4>R$ {cost}</h4>
        </div>
    )
}

export default Cards