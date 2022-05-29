
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/HomePages/Home';
import Tools from './Pages/HomePages/ToolRage/Tools';
import ToolsDetail from './Pages/HomePages/ToolRage/ToolsDetail';
import Login from './Pages/LogIn/Login';
import Register from './Pages/LogIn/Register';
import MyProfile from './Pages/MyProfile/MyProfile';
import Review from './Pages/Review/Review';
import NotFounded from './Pages/Shared/NotFounded';
import RequireAuth from './Pages/Shared/RequireAuth';
import AddAReview from './Pages/UserPage/AddAReview';
import DashBoard from './Pages/UserPage/DashBoard';
import MyOrders from './Pages/UserPage/MyOrders';
import 'react-toastify/dist/ReactToastify.css';
import Contact from './Pages/Blog/Contact';


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
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>

        {/* nested route */}
        <Route path='dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addareview' element={<AddAReview></AddAReview>}>Add a review</Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}>My profile</Route>
        </Route>


        <Route path='*' element={<NotFounded></NotFounded>} > </Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div >
  );
}

export default App;
