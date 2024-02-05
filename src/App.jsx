import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import AddForm from './components/AddForm';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Navbar onPageChange={setCurrentPage} />  
      {currentPage === 'dashboard' && <Dashboard />}
      {currentPage === 'add' && <AddForm />}
    </div>
  );
}

export default App;
