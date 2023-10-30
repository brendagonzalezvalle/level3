import React from "react";
import Pet from "./Pet";



export default function Friend(props){
    // console.log(props)
    const petData = props.pets.map(animal => {
        return (
            <Pet
                key={animal.name}
                name={animal.name}
                breed={animal.breed}
            />

        )
    })

    
    return(
        <div className="friend--container">
            <div className="friend--list">
                <h2>{props.name}</h2>
                <h2>Age: {props.age}</h2>

            </div>
           
            <div className="pet--container">
                {petData}

            </div>
            
          
            

        </div>
    )
}