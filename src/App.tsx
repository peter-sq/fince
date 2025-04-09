import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/login/Login';
import Dashboard from './pages/dashboard/Dashboard';

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path='/login' element = {<Login/>} />
        <Route path='/dashboard' element = {<Dashboard/> } />

      </Routes>
    </Router>
  )
}




export default App;
