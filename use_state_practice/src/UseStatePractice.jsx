import React from "react";

// 1. Pass in a new color of your choosing in place of the old one. 
    
//     Hint: we don’t care what the previous color was.

export default function UseStatePractice(){

    const [color, setColor] = React.useState("pink")

    function handleColor(){

        setColor("red")
        console.log(color)
    }

    // 2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.


    function toggleColors(){
        setColor(prevColor => prevColor === "pink" ? "blue" : "pink") 
        console.log(color)
    }

    // 3. Add a new person object to the following people array in state. You can hard-code a new object but it must be a person object with firstName and lastName properties.

    const [people, setPeople] = React.useState([
        {
            firstName: "John",
            lastName: "Smith"
        }
    ])
    
    function handleObject(){

    
        setPeople(prevPeople => {
            return [...prevPeople, {
                    firstName: "Brenda",
                    lastName: "Holman"
                }]
            
        })
        console.log(people)
    }

    // 4. Change the following state-setting functions to use an implicit return. A

    const [colors, setColors] = React.useState(["pink", "blue"])

    function implicit(){

        setColors(prevColors => [...prevColors, "green"])

        console.log(colors)

    }
    // Change the following state-setting functions to use an implicit return. B

    const [countObject, setCountObject] = React.useState({
        count: 0
    })
   
    function implicitObject(){

        setCountObject(prevState=> ({count: prevState.count + 1}))

        console.log(countObject)

    }

    // 5. Update the following state to add an additional property age and set the value to 30, ensuring that the other properties are not overwritten.

    const [person, setPerson] = React.useState({
		firstName: "John",
		lastName: "Smith"
    })

    function additionalProperty(){
        setPerson(prevPerson => ({
            ...prevPerson,
            age: 30
        }))

        console.log(person)


    }

    // 6. What’s wrong with the following state update?

    const [colors2, setColors2] = React.useState(["pink", "blue"])

    function stateColorUpdates(){

        setColors2("green")

        console.log(colors2) // output is "green", state is being updated from an array to a string
    }





    return (
        <div>
            <h1>State Practice</h1>
            <button onClick={handleColor}> Color Click </button>

            <br/>

            <button onClick={toggleColors}>Toggle Colors </button>

            <br/>

            <button onClick={handleObject}>New Person Object </button>

            <br/>

            <button onClick={implicit}>Implicit A </button>

            <br/>

            <button onClick={implicitObject}>Implicit B </button>

             <br/>

            <button onClick={implicitObject}>Implicit B </button>

            <br/>

            <button onClick={additionalProperty}>Add additional property </button>

            <br/>

            <button onClick={stateColorUpdates}>State Update </button>
            
        </div>
    )

}