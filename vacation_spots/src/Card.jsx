import React from "react";

export default function Card(props){
    return(
        <div className="card--container">
            <div className="card--info">
                <h1 className="card--place">{props.place}</h1>
                <h3 className="card--price">${props.price}</h3>
                <p className="card--season">Best time to visit: {props.timeToGo}</p>

            </div>
            <img src="https://images.unsplash.com/photo-1568696324083-238b35922ec8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80" className="card--image"/>


        </div>
    )
}