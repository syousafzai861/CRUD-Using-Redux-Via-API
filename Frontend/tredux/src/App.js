
import './App.css';
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import AddUser from './pages/AddUser';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/adduser' element={<AddUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
