import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import SingleProject from "./views/SingleProject";
import Home from "./views/Home";


function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence initial={true} exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path="/"
                render={() => <Home />}
              />
              <Route
                path="/project/:slug"
                render={() => <SingleProject />}
              />
            </Switch>
          </AnimatePresence>
        )}
      />

    </Router>
  );
}

export default App;
