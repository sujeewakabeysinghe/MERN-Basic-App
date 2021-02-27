import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import store from './store'
import NavBar from './components/navBar';
import ShoppingList from './components/shoppingList'
import ItemModel from './components/itemModel'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
      <NavBar name='Shopping List'/>
      <ItemModel/>
      <ShoppingList/>
    </div>
    </Provider>
  );
}

export default App;