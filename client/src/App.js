import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'
import { useEffect } from 'react';

import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAllQuestions() )
    dispatch(fetchAllUsers())
  }, [dispatch])
  
  return (
    <div className="App">
      {/* Implementation of navbar  */}
      <Router>
      <Navbar/>
      <AllRoutes></AllRoutes>
      </Router>
    </div>
  );
}

export default App;
