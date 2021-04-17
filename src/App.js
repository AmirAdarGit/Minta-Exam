import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Mints from "./components/Mints";

function App() {
  return (
    <Router>
      <Route exact path="/mints" component={Mints}></Route>
      <Route exact path={"/mints/:useCase"} component={Mints}></Route>
      <Route exact path={/^(?!\/mints).*$/}>
        <Redirect to="/mints"></Redirect>
      </Route>
      <Route exact path={/^(\/mints)[^\/].*$/}>
        <Redirect to="/mints"></Redirect>
      </Route>
    </Router>
  );
}

export default App;
