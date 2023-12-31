import { useState } from 'react';
import NewOrderPage from './pages/NewOrderPage';
import AuthPage from './pages/AuthPage';
import {Routes, Route, Navigate} from 'react-router-dom'

import CreateBookPage from './pages/CreateBookPage'

import OrderHIstoryPage from './pages/OrderHistoryPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';
import styles from './App.module.css';

function App() {
  const [user, setUser] = useState(getUser);
  console.log(user);
  
  return (
    <main className={styles.App}>

      {user ? 
      <>
      <NavBar user={user} setUser={setUser}/>
        <Routes>

          <Route path='/orders/new' element={<NewOrderPage user={user} setUser={setUser}/>}/>
          <Route path='/orders' element={<OrderHIstoryPage user={user} setUser={setUser}/>}/>
          
          <Route path='/items/' element={<CreateBookPage user={user} setUser={setUser}/>}/>

           {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
           <Route path="/*" element={<Navigate to="/orders/new" />} />

        </Routes>
        
        </>

        : <AuthPage setUser={setUser}/> }
      
      
    </main>
  );
}

export default App;
