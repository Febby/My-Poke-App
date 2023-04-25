import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PokemonList from './components/pokemonList'
import SearchBar from './components/SearchBar'
import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Poke App</h1>
//       <p className="read-the-docs">
//         Here you can find your pokemon and add it as your favourite
//       </p>
//       <div className="card">
//         <h2>Pokemon of the day</h2>
        
//         <p>
//           Random Pokemon here
//         </p>
//       </div>
//       <div className="card">
//         <h2>Search Pokemon</h2>
        
//         <p>
//           Search Your Pokemon here
//         </p>
//       </div>
     
//     </>
//   )
// }

const App = () =>{
  const [searchTerm, setSearchTerm] = useState('');

  return (
      <div>
        <h1>Poke App</h1>
        <p className="read-the-docs">
        Here you can find your pokemon and add it as your favourite
        </p>
        <h2>Search Your Pokemon</h2>
          <SearchBar onSearch={setSearchTerm}/>
          <PokemonList searchTerm={searchTerm} />

      </div>


  )

}

export default App
