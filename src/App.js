import React from "react";
import { HashRouter, Route } from "react-router-dom"
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import "./routes/Home.scss"

// the router takes the url, looks at it then according to what we 
//told the router, the router would say "okay! go to this component!
//go to this screen!"

// There are very important two props in route.
// 1. the screen that is going to render 
// 2. what url is it going to do

//ex) <Route path="/about" component={About} />
// --> if I go to this path, then show this component 

//ex) <Route path="/" component={Home} />
//    <Route path="/detail" component={Detail} />  
// --> react-router basically takes your url, and it will
// compare it to everything on your router. so it will take 
// the url slash('/' for home '/(detail)' for detail)
//--> if router finds it's a match then it is going to show
// the component ==> match되는거 전부를 한 화면에 다 render해버림!!

//exact={true} --> this, and nothing else : 이거랑 정확하게 똑같지
//않으면 {home} component는 불러오지마!
function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/detail" component={Detail} />
    </HashRouter>
  );
}

export default App;