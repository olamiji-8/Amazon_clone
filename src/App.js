import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import Navbar from './Component/Navbar/Navbar';
import ProductRight from './Component/Product/ProductRight';
import Home from './Pages/Home/Home';
import Login from './Pages/Signin/Signin';
import Product from './Pages/Product/Product';
import Signup from './Pages/Signup/Signup';
import Signin from './Pages/Signin/Signin';
import Footer from './Pages/Footer/Footer';
import GiftCardRight from './Component/GiftCard/GiftCardRight';
import Registry from './Pages/Registry/Registry';






function App() {
  return (
    
    <div className="App">
      <Router>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/Signin' element={<Signin/>}></Route>
      <Route path='/Signup' element={<Signup/>}></Route>
      
      {/* <Route path='/' element></Route>
      <Route path='/' element></Route>
      <Route path='/' element></Route> */}
     </Routes>
     </Router>
    </div>
    
  );
}

export default App;
