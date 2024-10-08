import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./pages/Shop";
import Like from "./pages/addToCart/Like";
import Share from "./pages/addToCart/Share";
import Compare from "./pages/addToCart/Compare";
import About from "./pages/About";
import Contact from "./components/Contact/Contact";
import Payment from "./pages/Payment";
import Returns from "./pages/Returns";
import Policies from "./pages/Policies";
import ErrorPage from "./components/ErrorPage";
import CartPage from "./pages/Cart/CartPage";
import SingleProduct from "./pages/Asgaard/SingleProduct";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route
            path="/shop/singleProduct/*"
            element={<SingleProduct />}
          ></Route>
          <Route path="/Share" element={<Share />}></Route>
          <Route path="/Compare" element={<Compare />}></Route>
          <Route path="/Like" element={<Like />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/payment" element={<Payment />}></Route>
          <Route path="/returns" element={<Returns />}></Route>
          <Route path="/policies" element={<Policies />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
