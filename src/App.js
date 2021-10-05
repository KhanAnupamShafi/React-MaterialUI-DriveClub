import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Service from "./components/Service/Service";
import NotFound from "./components/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import About from "./components/About/About";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <Router>
      <Header></Header>

      {/* switch route */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/service">
          <Service />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/testimonial">
          <Testimonial />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      {/* footer */}
      <Footer />
    </Router>
  );
}

export default App;
