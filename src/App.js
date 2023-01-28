import logo from "./logo.svg";
import "./App.css";

// to be added by routes;
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddHotel from "./pages/Addhotel";
import GetHotel from "./pages/Gethotel";
import Addusers from "./pages/Addusers";


function App() {
  return (
    <div className="App" >
      <header ></header>
      <Home/>
      <Login/>
      <AddHotel/>
      <GetHotel/>
      <Addusers/>
    </div>
  );
}

export default App;
