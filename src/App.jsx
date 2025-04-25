import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Search from './components/Search'


function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main>
      <div className='pattern'></div>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You Enjoy Without the Hassle</h1>
          
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
      </div>
     </main>

  )
}

export default App
