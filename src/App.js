import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import './App.css';
import Navbar from './Navbar';
import { Provider } from 'react-redux'; //react-reduc binding
import store from "./store/store";

function App() {
  return (
    <div className="App">

      <Provider store={store}>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
      </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
