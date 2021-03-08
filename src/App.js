import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import AddCustomer from "./components/AddCustomer";
import NavBar from "./components/NavBar";
import AddDocument from "./components/AddDocument";
import ManageCustomer from "./components/ManageCustomer";

function App() {
  return (
    <Router>
      <AuthProvider>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/addCustomer" component={AddCustomer} />
          <PrivateRoute exact path="/addDocument" component={AddDocument} />
          <PrivateRoute
            exact
            path="/manageCustomer"
            component={ManageCustomer}
          />
          <Route path="/login" component={SignIn} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
