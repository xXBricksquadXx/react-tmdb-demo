import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Film, Home } from "./pages";

function App() {
  return (
    <Router>
      <Switch>
        {/* Dynamic route/path */}
        <Route path="/:id">
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
