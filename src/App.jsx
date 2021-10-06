import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Home from "./Components/Home.jsx"
import About from "./Components/About.jsx"
import Service from "./Components/Service.jsx"
import Contact from "./Components/Contact.jsx"
import Practice from "./Components/Practice.jsx"
import Navbr from "./Components/Navbar.jsx"
import Footer from "./Components/footer"
import { Switch, Route, Redirect} from "react-router-dom"
import Img1 from "./Images/img1.png"

function App() {
  return (
    <>
    <div>
      <Navbr/>
      <Switch>
        <Route exact path="/">
          <Home name="Grow your business with " image={Img1} button="Get Started" visit="/services"  />
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/services">
          <Service/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/practice">
          <Practice/>
        </Route>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
      
    </div>
    </>
  );
}

export default App;
