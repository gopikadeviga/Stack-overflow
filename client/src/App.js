import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/Navbar'
import AllRoutes from './AllRoutes'
import { useEffect, useState } from 'react';

import { fetchAllQuestions } from './actions/question';
import { fetchAllUsers } from './actions/users';
import { useDispatch } from 'react-redux';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllQuestions() );
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const [slideIn, setSlideIn ] = useState(true);

  useEffect(() => {
    if (window.innerWidth <= 760) {
      setSlideIn(false);
    }
  }, []);
  
  const handleSlideIn = () => {
    if (window.innerWidth <= 760) {
      setSlideIn((state) => !state);
    }
  };

  return (
    <div className="App">
      {/* Implementation of navbar  */}
      <Router>
      <Navbar handleSlideIn={handleSlideIn}/>
      <AllRoutes slideIn={slideIn} handleSlideIn={handleSlideIn} ></AllRoutes>
      </Router>
    </div>
  );
}

export default App;
