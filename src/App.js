import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
