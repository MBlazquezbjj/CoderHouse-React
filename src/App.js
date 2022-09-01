import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from "../src/components/NavBar/NavBar.jsx";
import Login from "../src/components/Login/Login.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "../src/components/ItemDetailContainer/ItemDetail.jsx"
import UserForm from "./components/UserForm/UserForm.jsx";
import CartView from "../src/components/CartView/CartView.jsx";
import Footer from "../src/components/Footer/Footer.jsx";
import { CartProvider } from "./Store/cartContext.jsx";

function App() {

  return (

    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes >
          <Route path="/Login" element={<Login />} />
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
          <Route path="/contact" element={<UserForm />} />
          <Route path="/cart" element={<CartView />} />
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
        </Routes>
        <UserForm />
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
