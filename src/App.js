import Dashboard from "./components/Dashboard";
import SignIn from "./components/SignIn";

function App() {
  const user = null;
  return user ? <Dashboard /> : <SignIn />;
}

export default App;
