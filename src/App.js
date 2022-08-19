import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from "../src/components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetail from "../src/components/ItemDetailContainer/ItemDetail.jsx"
import Item from "./components/Item/Item";
import ItemCount from './components/ItemCount';
import Footer from './components/Footer/Footer';


function App() {


  return (
    <div>

      <NavBar />
      <Routes />
      <Route path='/'element={<ItemListContainer/>}/>
      <Route path="/item/:id" element={<ItemDetail/>}/>
      <h1>E-watch</h1>
      <Item/>
      <ItemCount />
      <Routes />
      <Footer />

    </div>
  );
}

export default App;
