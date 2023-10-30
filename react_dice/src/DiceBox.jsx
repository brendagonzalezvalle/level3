import React, {useState} from 'react'


export default function DiceBox(){

    const [numbers, setNumbers] = useState([1, 2, 5, 6, 3])
   

    function handleClick(){
       
        
        let randomNumber = []
        for(let i = 0; i < 6; i++){
            
            const random = Math.floor(Math.random() * 6) + 1
            randomNumber.push(random)
            console.log(random)
        }
        

        setNumbers(randomNumber)

    }
    console.log(numbers)
    
    const array = numbers.map(num => {
        return <h1>  {num} </h1>
    })


    return(
        <div>
            <h1>Dice Box</h1>
            <button onClick={handleClick}>Click Me!</button>
            {array}
        </div>
    )
}