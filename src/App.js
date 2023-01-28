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



/*


in server

server.js
// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

package.json

script : {
  start: "node server.js"
}

*/
