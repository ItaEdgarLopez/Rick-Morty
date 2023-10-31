import { useState } from 'react';
import './App.css'


import  Rick  from './img/rick-morty.png'
import Characters from './components/Characters';

function App() {

    const [personajes, setPersonajes] = useState(null);


    const reaqApi =  async() => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const charactersApi = await response.json()
      setPersonajes(charactersApi)
    }

  return (
     <>
        <h1 className='title'>Rick & Morty</h1>
      { personajes ? (
        <Characters
        personajes={personajes}
        setPersonajes={setPersonajes}
      />
      ): (
        <div>
        <img src={Rick}  alt="Rick & Morty" className='img-home' />
        <button onClick={reaqApi} className='btn-search'>Buscar Personajes</button>
        </div>
      )}

       
    </>
  )
}

export default App
