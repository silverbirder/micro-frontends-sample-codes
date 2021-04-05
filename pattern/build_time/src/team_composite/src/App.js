import TopBar from '@bit/silver-birder.silverbirder.top-bar';
import ProductList from '@bit/silver-birder.silverbirder.product-list';
import './App.css';

function App() {
  return (
    <div>
      <TopBar className="top-bar" />
      <div className="container">
        <ProductList />
      </div>
    </div>
  );
}

export default App;
