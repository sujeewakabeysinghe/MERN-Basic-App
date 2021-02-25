import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar';
import ShoppingList from './components/shoppingList'

function App() {
  return (
    <div className="App">
      <NavBar name='Shopping List'/>
      <ShoppingList/>
    </div>
  );
}

export default App;