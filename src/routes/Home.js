import React from "react";
import TypeTitle, { vegeTypes }  from "../components/Type";
import "./Home.scss";
import "../reset.css";
import Navigation from "../components/Navigation";

// react is automatically going to execute their render 
// method(function) of my class component

//state is an object, and there is where I'm going to put
//data of my component, the data that will change
class Home extends React.Component {
  state = {
    isLoading: true,
    vegeTypes: vegeTypes
   };
  

// if I call setstate, react is going to refresh the state 
// but also call their render function one more time with 
// the new state.
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 4000)
  }

  //<Link to="/"> 는 <a href="">와 같지만 새로고침을 하지않고 넘어감
  //또한 to={{}} 안에 state를 정의해서 pathname의 url로 갔을 때 그 state 값을 받아올 수 있음

  render() {
    const { isLoading, vegeTypes } = this.state;
    return(
      <div className="container">
        {isLoading? 
          <div class="loader">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> : (
            <section className="Home">
              <Navigation />
              <section className="Menu">
            {vegeTypes.map((types) =>(
              <TypeTitle key={types.id} name={types.name} photo={types.image} desc={types.description} icon={types.icon} />
            ))}
        </section>  
            </section>
            
          )                          
        }
      </div>
    )
  };
}

export default Home;
