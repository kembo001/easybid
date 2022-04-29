import './App.css'
import Nav from "./componets/Nav";
import Header from './componets/Header'
import Auctions from './componets/Auctions';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Auctions />
    </div>
  );
}

export default App;
