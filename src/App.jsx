import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Banner from './components/Banner';
import Cart from './components/Cart';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import Order from './components/Order';
import Successful from './components/Successful';
import CartContextProvider from './context/CartContext';
import getFirestoreApp from './firebase/config';

getFirestoreApp();

function App() {
  const [showBanner, setShowBanner] = useState(true);

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <CartContextProvider>
      {showBanner && <Banner handleCloseBanner={handleCloseBanner} />}
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/successful" element={<Successful />} />
        <Route path="/order/:orderId" element={<Order />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartContextProvider>
  );
}

export default App;
