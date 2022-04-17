
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import Blogs from './component/Blogs/Blogs';
import Checkout from './component/Checkout/Checkout';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Register from './component/Register/Register';
import RequireAuth from './component/RequireAuth/RequireAuth';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path='/home/:serviceId' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="/about" element={<About></About>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
