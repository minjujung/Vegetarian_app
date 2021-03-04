import React from "react";
import TypeTitle, { vegeTypes }  from "./components/Type";
import "./App.scss";
import "./reset.css";


// react is automatically going to execute their render 
// method(function) of my class component

//state is an object, and there is where I'm going to put
//data of my component, the data that will change
class App extends React.Component {
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
  
  render() {
    const { isLoading, vegeTypes } = this.state;
    return(
      <div className="container">
        {isLoading? 
          <div className="Loader">
            <span className="Loader_text">Welcome :D</span>
          </div> : (
            <secition className="Home">
              <div className="title">
                <div className="title_text">
                  <h1>What is vegetarian?!</h1>
                </div>
                <nav>
                  <ul>
                    <li>Home</li>
                    <li>Shop</li>
                  </ul>
                  <ul>
                    <li>Top</li>          
                  </ul>
                </nav>
              </div>
              <section className="Menu">
            {vegeTypes.map((types) =>(
              <TypeTitle key={types.id} name={types.name} photo={types.image} desc={types.description} icon={types.icon} />
            ))}
        </section>  
            </secition>
            
          )                          
        }
      </div>
    )
  };
}

export default App;
