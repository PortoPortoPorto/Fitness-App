import { useState, useContext } from 'react'; 
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


  return (
    <>
      <GlobalProvider>
        <div className='bg-blue-100'>
         <Header/>
         <Nav/>
         <Logbody/>
         <Footer/>
        </div>
      </GlobalProvider>
    </>
  )
}

export default App