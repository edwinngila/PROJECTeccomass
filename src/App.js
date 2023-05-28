import Login from "./components/LoginForm";
import { BrowserRouter,Switch,Route } from "react-router-dom/cjs/react-router-dom";
import "./components/Home.css";
import Signup from "./components/SignUp";
import Landing from "./components/LandingPage";
function App() {
  return (
    <div className="App">         
      <BrowserRouter>            
        <Switch>
           <Route exact path="/">
              <Landing/>  
           </Route>         
            <Route path="/login">
               <Login/>
            </Route>
             <Route path="/signup">
               <Signup/>
            </Route>                      
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
