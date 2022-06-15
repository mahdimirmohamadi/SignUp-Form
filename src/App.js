import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Redirect from="/" to="/signup" />
      </switch>
    </div>
  );
}

export default App;
