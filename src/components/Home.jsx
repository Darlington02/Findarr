import React, {useState} from 'react';
import {Routing} from './Router'
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import {Results} from './Results'

function Home() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
        <Results />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
