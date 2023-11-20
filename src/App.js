
import './App.css';
import './Header';
import Header from './Header';
import Carrosel from './Carrosel'
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
function App(){

  const [user, setUser] = useState("Paulo");

  return(
    <div className="App">
          
      <Header user={user}></Header>
      <Carrosel></Carrosel>
      <Outlet></Outlet>
    
    
    </div>  
  );
  
}
export default App;
