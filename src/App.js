import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import ProductRight from './Component/Product/ProductRight';
import Home from './Pages/Home/Home';
import Product from './Pages/Product.js/Product';


function App() {
  return (
    
    <div className="App">
      <Router>
     <Routes>
      <Route path='/' element={<ProductRight/>}>
        
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
