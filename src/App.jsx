import { useState, useContext, useEffect } from 'react'; 
import Header from './components/Header.jsx'; 
import Nav from './components/Nav.jsx';
import Logbody from './components/Logbody.jsx';
import Footer from './components/Footer.jsx';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { GlobalProvider } from './context/GlobalState.jsx';

library.add(fas, far); 

function App() {
  const [count, setCount] = useState(0)
  const [ dropdown, setDropdown ] = useState(false);


  return (
    <>
      <GlobalProvider>
        <div className='bg-gradient-to-r from-white to-blue-200'>
         <Header/>
         <Nav dropdown={dropdown} setDropdown={setDropdown}/>
         <Logbody dropdown={dropdown} setDropdown={setDropdown}/>
         <Footer/>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App
