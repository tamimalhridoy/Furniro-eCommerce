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

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
