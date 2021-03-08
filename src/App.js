import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AddUser from "./components/AddUser";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/addUser" component={AddUser} />
          <Route path="/login" component={SignIn} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
