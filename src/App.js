import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import "./App.css";

// Import components
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import MemeEditor from "./components/Meme-Generator/MemeEditor";
import MainPage from "./components/Main-Page/MainPage";
import MemeGenerator from "./components/Meme-Generator/MemeGenerator";
import ImageSelector from "./components/Meme-Generator/ImageSelector";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/auth",
    element: <Login />,
  },
  {
    path: "/home",
    element: <>Home Page</>,
  },
  {
    path: "*",
    element: <div>Page not found</div>,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
