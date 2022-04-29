import './App.css'
import Nav from "./componets/Nav";
import Header from './componets/Header'
import Auctions from './componets/Auctions';
import Footer from './componets/Footer';
import AuctionFull from './componets/AuctionFull';
import Signin from './componets/SignIn';
// import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    // <Router>{/* </Router> */}
    <div className="App">
      <Nav/>
      <Header />
      <Auctions />
      {/* <Route path='/componets/AuctionFull' component={AuctionFull} /> */}
      {/* <Route path='./componets/SignIn' component={Signin}/> */}
      <Footer />
    </div>
  );
}

export default App;
