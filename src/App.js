import "./App.css";
import MyNav from "./components/MyNav";
import { Routes, Route, Navigate } from "react-router-dom";
import Electronics from "./pages/Electronics";
import Clothes from "./pages/Clothes";
import Jewelry from "./pages/Jewelry";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";
import MyFooter from "./components/MyFooter";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <>
      <CartContextProvider>
        <MyNav></MyNav>
      </CartContextProvider>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/electronics" element={<Electronics />} />
        <Route
          path="/productDetails"
          element={
            <CartContextProvider>
              <ProductDetails />
            </CartContextProvider>
          }
        >
          <Route
            path=":id"
            element={
              <CartContextProvider>
                <ProductDetails />
              </CartContextProvider>
            }
          ></Route>
        </Route>
        <Route path="/clothes" element={<Clothes></Clothes>} />
        <Route path="/jewelery" element={<Jewelry />} />
        <Route
          path="/cart"
          element={
            <CartContextProvider>
              <Cart />
            </CartContextProvider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MyFooter></MyFooter>
    </>
  );
}

export default App;
