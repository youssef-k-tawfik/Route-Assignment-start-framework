import { createHashRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Layout from "./Components/Layout/Layout";
import Portfolio from "./Components/Portfolio/Portfolio";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";

const routes = createHashRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "contact", element: <Contact /> },
      { path: "*", element: <Navbar /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
