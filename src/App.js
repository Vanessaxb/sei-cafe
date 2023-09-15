import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom'
import "./App.css"
import OrderHIstoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser);
  console.log(user);
  
  return (
    <main className="App">

      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
        <Routes>

          <Route path='/orders/new' element={<NewOrderPage/>}/>
          <Route path='/orders' element={<OrderHIstoryPage/>}/>

        </Routes>
        
        </>

        : <AuthPage setUser={setUser}/> }
      
      
    </main>
  );
}

export default App;