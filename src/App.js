
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Checkout from './component/Checkout/Checkout';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path='/home/:serviceId' element={<Checkout></Checkout>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/about" element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
