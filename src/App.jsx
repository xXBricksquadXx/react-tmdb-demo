import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Film, Home } from "./pages";

function App() {
  return (
    <Router>
      {/* TODO: Set up the Route and Switch such that Home is rendered '/' and 'Film' is rendered when we go to '/Film' */}
      <Switch>
        <Route path="/film">
          <Film />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
