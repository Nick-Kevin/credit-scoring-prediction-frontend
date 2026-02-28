import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Estimator from './pages/Estimator';
import Explanation from './pages/Explanation';

function App() {

  return (
    <Router>      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='estimator' element={<Estimator/>} />
          <Route path='model-explanation' element={<Explanation />}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
