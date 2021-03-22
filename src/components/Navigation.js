import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";
import "../reset.css";

function Navigation() {
    return (
        <div className="Navigation">
               <div className="title">
                <div className="title_text">
                  <h1>What is vegetarian?!</h1>
                </div>
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>Shop</li>
                  </ul>
                  <ul>
                    <li>Top</li>          
                  </ul>
                </nav>
              </div>
        </div>
     
    );
}

export default Navigation;