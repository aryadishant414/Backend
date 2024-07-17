
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


function App() {
  const [jokes , setJokes] = useState([]);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJokes(response.data)
      })
      .catch((error)=> {
        console.log(error);
      })
  } , []);
  
  

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>
      
      {jokes.map((eachJoke) => (
        <div key={eachJoke.id}>
          <h3>{eachJoke.title}</h3>
          <p>{eachJoke.content}</p>
        </div>
        
      ))}
    </>
  )
}

export default App
