import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/Main-Page/MainPage";
import NavBar from "./components/NavBar/NavBar";
import Router from "./router/index";

function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      {/* <NavBar /> */}
      <Router />
    </div>
  );
}

export default App;
