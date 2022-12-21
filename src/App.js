import './App.css';
import Header from './Components/Header/Header';
import ProductTable from './Components/Table/ProductTable';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className='wrapper'>
          <ProductTable/>
        </div>
    </div>
  );
}

export default App;
