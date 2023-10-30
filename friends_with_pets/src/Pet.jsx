import React from "react";

export default function Pet(props){
    // console.log(props)
    return(
        <div className="pet--container">
            
            <h2> Pet Name: {props.name}</h2>
            <h2> Breed: {props.breed}</h2>
           
        </div>
    )
}