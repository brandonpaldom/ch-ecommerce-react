import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Successful from './components/Successful';
import CartContextProvider from './context/CartContext';
import getFirestoreApp from './firebase/config';

getFirestoreApp();

function App() {
  return (
    <CartContextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/successful" element={<Successful />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
