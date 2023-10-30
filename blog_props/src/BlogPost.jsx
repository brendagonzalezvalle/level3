import React from "react";

export default function BlogPost(props){
    console.log(props.title)
    return(
        <>
        <h1>{props.title}</h1>
        <h2>{props.subTitle}</h2>
        <p>Posted By <span>{props.author}</span> on <span>{props.date}</span></p>
        
        
        </>
    )
}