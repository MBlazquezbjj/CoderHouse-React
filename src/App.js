import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from "../src/components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "../src/components/ItemDetailContainer/ItemDetail.jsx"
import Footer from "../src/components/Footer/Footer.jsx";
import { CartProvider } from "./Store/cartContext.jsx";



function App() {

  return (

    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <Routes >
          <Route path='/' element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetail />} />
        </Routes>
        <Footer />
      </CartProvider>

    </BrowserRouter>

  );
}

export default App;
