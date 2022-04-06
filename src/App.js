
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route, Link } from "react-router-dom";
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/About/About';
import Grandpa from './components/Grandpa/Grandpa';
function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Home></Home>} />
        <Route path="/orders" element={<OrderReview />} />
        <Route path='/grandpa' element={<Grandpa></Grandpa>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
