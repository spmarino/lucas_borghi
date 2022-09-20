import React from "react"
import './App.css';
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { ProductProvider } from "./Components/CartContext/CartContext";


const App = () => {
  return(
    <ProductProvider>
      <div>
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ProductProvider>
  )
}

export default App;