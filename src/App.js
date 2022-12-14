import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './Component/Header/Header';

function App() {
  return (
    
    <div className="App">
      <Router>
     <Routes>
      <Route path='/' element={<Header/>}>
        
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
