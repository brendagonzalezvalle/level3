import React from "react";
import data from "./data"
import Friend from "./Friend";
console.log(data)

export default function FriendList(){

    const friendsData = data.map( person=> {
        return (
            <Friend
            key={person.name}
            name={person.name}
            age={person.age}
            pets={person.pets}
            
            />
        )
      })
    
    return(
        <div >
            
            {friendsData}
        </div>
    )
}