import React from "react";
import Proptypes from "prop-types";
import "../App.scss";
import "../reset.css";
import { FaCarrot, FaFish, FaIceCream } from "react-icons/fa";
import { GiShinyApple, GiWheat, GiSlicedMushroom, GiMilkCarton, 
         GiCheeseWedge, GiRawEgg, GiPeanut } from "react-icons/gi";


function TypeTitle({ name, photo, desc, icon }) {
    return (
            <section className="type">
              <img src={photo} alt={name}></img>
              <div className="type_text">
                <h3>{name}</h3> 
                  <div className="icon">{icon}</div>
                <p>{desc}</p>
              </div>
            </section>
      );
  }

//allow me to check that the props that I'm getting are 
//the props that I want
TypeTitle.propTypes = {
    name: Proptypes.string.isRequired,
    photo: Proptypes.string.isRequired,
    desc: Proptypes.string.isRequired
  }
  
export const vegeTypes = [
    {
      id: 1,
      name: "Fruitarian", 
      image: "https://images.unsplash.com/photo-1546630392-db5b1f04874a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGZydWl0cyUyMG51dHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      description: "Only raw fruit, nuts, and seeds",
      icon: [<GiShinyApple />, <GiPeanut /> ]
    },
    {
      id: 2,
      name: "Vegan",
      image: "https://images.unsplash.com/photo-1543364195-bfe6e4932397?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      description: "Only eat foods derived from plant sources. No meat or animal by-products!",
      icon: [<FaCarrot />, <GiShinyApple />, <GiWheat />, <GiSlicedMushroom />]
    },
    {
      id: 3,
      name: "Lacto",
      image: "https://images.unsplash.com/photo-1572086301738-b823f402f705?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGRhaXJ5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
      description: "Allow diary, No eggs, fish or meat",
      icon: [<GiMilkCarton />, <GiCheeseWedge />, <FaIceCream />]
    },
      {
      id: 4,
      name: "Lacto-Ovo",
      image: "https://images.unsplash.com/photo-1579592867095-d3c371b7045a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
      description: "Eat dairy and eggs. No fish or meat",
      icon: [<GiMilkCarton />, <GiRawEgg />, <GiCheeseWedge /> ]
    },
    
    {
      id: 5,
      name: "Semi-Vegitarian",
      image: "https://i.pinimg.com/564x/7b/76/37/7b76374b5a45398deb44c1d8737a7ab3.jpg",
      description: "Only exclusion is red meat",
      icon: [<GiMilkCarton />, <FaFish />, <GiRawEgg />, <GiCheeseWedge /> ]
    }
      ]

export default TypeTitle;