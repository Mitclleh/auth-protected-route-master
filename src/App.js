import "./App.css";
import Home from "./View/Home/Home";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import BlogDetails from "./View/CategoryView/CategoryView";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Signin} />
      <ProtectedRoute exact path="/home" component={Home} />
      <ProtectedRoute  path="/details/:id" component={BlogDetails} />
    </BrowserRouter>
  );
}

export default App;
