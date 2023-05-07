import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Store from "./Components/Store";
import Contact from "./Components/Contact";
import About from "./Components/About";
import AddingSeller from "./Components/AddingSeller";
import Product from "./Components/Product copy";
import Login from "./Components/Login";
import ForgotPassword from "./Components/ForgotPassword";
import SignUp from "./Components/SignUp";
import AddDetailes from "./Components/AddDetailes";
import UserDetailes from "./Components/UserDetailes";
import Cart from "./Components/Cart";
import {useCurrenUserInfo} from './Context/CurrenUserInfoContext'
import { useAuth } from "./Context/AuthContext";
import ThreeDots from "./Components/ThreeDots";
import ErrNotLoggedIn from "./Components/ErrNotLoggedIn";
import Footer from "./Components/Footer";
import Sofrim from "./Components/Sofrim";
import Sofer from "./Components/Sofer";
import EmailAfterPurchas from "./Components/EmailAfterPurchas";
import EmailverfElert from "./Components/EmailverfElert";
import { useFirestore } from "./Context/FireStoreContext";

function App() {
  const{currenUserInfoState} = useCurrenUserInfo();
  const { currentUser } = useAuth();
const {getDataFS}=useFirestore()


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/:product" element={<Store/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sofrim" element={<Sofrim />} />
        <Route path="/sofrim/:name" element={<Sofer />} />      
        <Route path="/about" element={<About />} />
        <Route path="/addingSeller" element={(currenUserInfoState?.sofer)?(<AddingSeller/>):<ErrNotLoggedIn/>} />
        <Route path="/:product/:itemNum" element={currenUserInfoState?<Product/>:( (currentUser)?(currentUser.emailVerified)?<AddDetailes/>:<EmailverfElert/>:<ErrNotLoggedIn/>)} />
        <Route path="/addDetailes" element={((currentUser)?(currentUser.emailVerified?<AddDetailes/>:<EmailverfElert/>):<ErrNotLoggedIn/>)} />
        <Route path="/userDetailes" element={currenUserInfoState?<UserDetailes/>:( (currentUser)?(currentUser.emailVerified)?<AddDetailes/>:<EmailverfElert/>:<ErrNotLoggedIn/>)} />
        <Route path="/cart" element={(currenUserInfoState)?(<Cart/>):((currentUser)?<ThreeDots/>:<ErrNotLoggedIn/>)} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
