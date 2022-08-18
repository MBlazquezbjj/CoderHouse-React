import './App.css';
import NavBar from "../src/components/NavBar/NavBar.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Card from "./components/Card/Card";
import ItemCount from './components/ItemCount';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {

  const dataProducts = [{
    name: "Rolex AirKing",
    price: 10000,
    img: "../src/img/Airking.jpg",
    description: "Homenaje a los exploradores del cielo, el Air‑King honra a los pioneros de la aviación e invita a que cada cual tome los mandos de su propio destino. Rolex presenta el Oyster Perpetual Air‑King de nueva generación. Este reloj cuenta con una caja enteramente rediseñada: incorpora protectores de la corona y sus flancos de la carrura son rectos, al igual que en la mayoría de los modelos de la categoría Profesional."
  }, {
    name: "Rolex Cellini",
    price: 15000,
    img: "../src/img/Cellini.jpg",
    description: "El Cellini Moonphase está equipado con una esfera lacada blanca con un disco esmaltado azul en la posición de las 6 h, sobre el que figuran la luna llena —materializada mediante un aplique de meteorito— y la luna nueva, representada por un círculo.El Cellini Moonphase dispone además de visualización de la fecha mediante una aguja central, rematada en una medialuna que indica el día sobre el contorno de la esfera."
  }, {
    name: "Rolex Datejust",
    price: 20000,
    img: "../src/img/Datejust.jpg",
    description: "La esfera es el rostro distintivo de un reloj Rolex, el mayor responsable de su identidad y legibilidad. Caracterizada por sus índices de oro que evitan la pérdida de brillo, cada esfera Rolex está diseñada y manufacturada en nuestros talleres, principalmente a mano, para garantizar su perfección."
  }, {
    name: "Rolex Explorer",
    price: 25000,
    img: "../src/img/Explorer.jpg",
    description: "La esfera es el rostro distintivo de un reloj Rolex, el mayor responsable de su identidad y legibilidad. Las cifras 3, 6 y 9, características del modelo, ahora están recubiertas de un material luminiscente de larga duración, que emite un color azul, igual que los índices y las agujas. Como todos los relojes Rolex, la esfera del Explorer está diseñada y manufacturada en nuestros talleres, principalmente a mano, para garantizar su perfección."
  }, {
    name: "Rolex Milgauss",
    price: 30000,
    img: "../src/img/Milgauss.jpg",
    description: "El cristal de zafiro verde es un exclusivo cristal de reloj desarrollado por Rolex. Disponible únicamente en el Milgauss, es resistente a las rayaduras e inalterable con el paso del tiempo. Su tono verde claro, presente en todo el cristal tintado, se vuelve casi luminiscente en su borde exterior biselado. Es el resultado de un proceso secreto que requirió años de desarrollo hasta su completo dominio y varias semanas para su producción."
  },

  ]

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <h1>E-watch</h1>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/Galeria/:id' element={<ItemDetailContainer />} />
          <Route path='/:id' element={<ItemListContainer />} />
          <Card data={dataProducts[0]} />
          <ItemCount initial={1} stock={5} />
          <Card data={dataProducts[1]} />
          <ItemCount initial={1} stock={5} />
          <Card data={dataProducts[2]} />
          <ItemCount initial={1} stock={5} />
          <Card data={dataProducts[3]} />
          <ItemCount initial={1} stock={5} />
          <Card data={dataProducts[4]} />
          <ItemCount initial={1} stock={5} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
