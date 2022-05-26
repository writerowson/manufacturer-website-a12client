
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/HomePages/Home';
import Tools from './Pages/HomePages/ToolRage/Tools';
import ToolsDetail from './Pages/HomePages/ToolRage/ToolsDetail';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';
import MyProfile from './Pages/MyProfile/MyProfile';
import NotFounded from './Pages/Shared/NotFounded';
import RequireAuth from './Pages/Shared/RequireAuth';



function App() {
  return (
    <div className='App bg-base-200 ' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tools' element={<Tools></Tools>}></Route>
        <Route path='/tools/:toolId' element={<RequireAuth><ToolsDetail></ToolsDetail></RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/myprofile' element={<MyProfile></MyProfile>}></Route>
        <Route path='*' element={<NotFounded></NotFounded>} > </Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
