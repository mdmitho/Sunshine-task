import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import Service from './Components/AllWacth/Service';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/service" element={<Service />} />
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
