import { BrowserRouter as Switch, Route} from "react-router-dom";

import Description from "./View/body/description";
import Home from "./View/body/home";
import MyAd from "./View/body/myAd";

import AddAnnonce from "./View/Form/addAnnonce";
import FormAnnonce from "./View/Form/annonce";
import Contact from "./View/Form/contact";

import Login from "./View/Form/Login";
import Signup from "./View/Form/signup";
import UpdateAd from "./View/Form/UpdateAd";


const Routes = () => {
 /* const isAuthenticated = localStorage.getItem("accessToken");
  console.log(isAuthenticated);
  */
  

  return (
    
    <Switch>
     {/*isAuthenticated ? <Redirect to="/" /> : ""  */}
   

     <Route exact path="/" component={Home} />
      <Route path="/annonces" component={FormAnnonce} />
      <Route path="/ajoutannonce" component={AddAnnonce}/>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/mesannonces" component={MyAd}/>
      <Route path="/description" component={Description}/>
      <Route path="/update" component={UpdateAd}/>
      <Route path="/contact" component={Contact}/>



      
    </Switch>
  );
};

export default Routes;
