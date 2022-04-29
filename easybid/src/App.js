import './App.css'
import Nav from "./componets/Nav";
import Header from './componets/Header'
import Auctions from './componets/Auctions';
import Footer from './componets/Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <Auctions />
      <Footer />
    </div>
  );
}

export default App;
