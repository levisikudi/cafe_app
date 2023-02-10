//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth';
import NewOrderPage from './pages/new_order';
import OrderHistoryPage from './pages/order_history';
import Nav from './components/nav';

function App() {

  const [user, setUser] = useState(true);

  return (
    <div className="App">
      { user ?
      <div>
        <Nav />
        <Routes>
          <Route path="/order" element={<OrderHistoryPage />}/>
          <Route path="/order/new" element={<NewOrderPage />}/>
        </Routes>
      </div>
      :
      <AuthPage />
      }
        
    </div>
  );
}

export default App;
