import { useState } from 'react'
import Square from './Square'


function App() {

  const [colors, setColors]= useState(["white", "white", "white", "white"])

   const colorArray = colors.map(color => {
    return (
      <Square 
      color={colors}
     
      />
      
    )

   })

   function handleSmallDJ(){
    console.log("small dj")
    
  let squares = document.getElementsByClassName("topGrid--containers")
  console.log(squares)
  
  for (let i = 0; i < squares.length; i++) {
    
    if (colors[i] === "white"){
      setColors(["black", "black", "black", "black"])
      squares[i].style.backgroundColor = "black"

    } else if (colors[i] === "black") {
      setColors(["white", "white","white", "white"])
      squares[i].style.backgroundColor = "white"
    } else {
      console.log("else is running")
    }
    
    
    
  } 
 
   }

   
   
function handlePartyDJ(){
  console.log("handlePartyDJ")

  let squares = document.getElementsByClassName("topGrid--containers")
  console.log(squares)

  squares[0].style.backgroundColor = "purple"
  squares[1].style.backgroundColor = "purple"

  const sliceArray = colors.splice(0,2)
  console.log(sliceArray)

  const test = sliceArray

  console.log(colors)

}
 

  return (
  <div>
    <h1>App</h1>
    
    {colorArray}

   
    <button onClick={handleSmallDJ}>Small DJ</button>
    <button onClick={handlePartyDJ}>Party DJ</button>
    <button>Left Blue</button>
    <button>Right Blue</button>
  


  </div>
        
    
  )
}

export default App
