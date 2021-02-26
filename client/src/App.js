import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store'
import NavBar from './components/navBar';
import ShoppingList from './components/shoppingList'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <NavBar name='Shopping List'/>
      <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;