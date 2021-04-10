import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home/Home";
import Bag from "./pages/bag/Bag";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import Footer from "./components/footer/footer";
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/bag" component={Bag} />
        <Route exact path="/single-product/:id" component={SingleProduct} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
