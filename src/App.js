import React from 'react';
// import Homepage from './Components/Homepage';
import NavBar from './Components/NavBar';
import Hero from './Components/Hero';
import Cards from './Components/Cards';
import Foods from './Components/Foods';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
     <Router>
      <NavBar/>
       <Routes>
        
        
       {/* <Route path="/" element={<Homepage/>} /> */}
       {/* <Route path="/" element={<NavBar/>} /> */}
       <Route path="/" element={<Hero/>} />
       </Routes>
       <Cards/>
       <Foods/>
     </Router>
  );
}

export default App;
