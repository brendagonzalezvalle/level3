import React from "react"
import Card from "./Card"
import vacationData from "./vacationData"
import index from "./index.css"

console.log(vacationData)

function App() {

  const vacationSpots = vacationData.map(function(spot){
    return (
      <Card
        key={spot.place}
        place={spot.place}
        price={spot.price}
        timeToGo={spot.timeToGo}
      />

    )
  })
 

  return (
    <div>
      <h1 className="app--title"> Vacation Spots </h1>
      {vacationSpots}
    </div>
  )
}

export default App
