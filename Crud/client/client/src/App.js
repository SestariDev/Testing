
import './App.css';
import { useState, useEffect } from 'react';
import Cards from './components/Cards';



function App() {

    const [values,setValues] = useState('')
    const[list,setList] = useState([])

    const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue, [value.target.name]: value.target.value,
    }
    )
    )
  }

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name,
          cost: values.cost,
          category: values.category,
        }),
      });


      if (!response.ok) {
        throw new Error(`Erro na requisição: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Erro:', error.message);
    }

    console.log(values)

  };


  useEffect(() => {
    fetch('http://localhost:3001/getcards')
       .then((response) => response.json())
       .then((data) => {
          setList(data)        
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);

  console.log(list)

  return (
    <div className="App">
       <div>

          <h1>Scrim Shop</h1>


          <form onSubmit={handleSubmit}>
            <input type='text' 
            name='name'
            placeholder='register input'
            onChange={handleChangeValues}
            >

            </input>
            
            <input type='number' 
            name='cost'
            placeholder='preço'
            onChange={handleChangeValues}
            ></input>

            <input type='text' 
            name='category'
            placeholder='categoria'
            onChange={handleChangeValues}
            ></input>
            <button type='submit'> 
              Enviar
            </button>
          </form>
        </div>
        {
          list.map((game)=>{
            return(
            <div key=  {game.idGames}>
            <Cards id={game.idGames} name={game.name} category={game.category} cost={game.cost}/>
            </div>
            
            
            )
          }
          )
        }
        
    </div>
  );
}

export default App;
