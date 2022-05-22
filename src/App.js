
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Header/Header';
import Home from './Pages/HomePages/Home';
import Tools from './Pages/HomePages/Tools/Tools';


function App() {
  return (
    <div className='App ' >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/tool' element={<Tools></Tools>}></Route>
      </Routes>
    </div>
  );
}

export default App;
