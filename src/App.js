
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/HomePages/Home';
import Tools from './Pages/HomePages/ToolRage/Tools';
import Login from './Pages/LogIn/Login';



function App() {
  return (
    <div className='App bg-base-200 ' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tool' element={<Tools></Tools>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
