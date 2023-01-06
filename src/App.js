import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import Home from './Pages/Home/Home';


function App() {
  return (
    
    <div className="App">
      <Router>
     <Routes>
      <Route path='/' element={<Home/>}>
        
      </Route>
      {/* <Route path='/' element></Route>
      <Route path='/' element></Route>
      <Route path='/' element></Route> */}
     </Routes>
     </Router>
    </div>
    
  );
}

export default App;
