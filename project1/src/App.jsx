// import { useState } from 'react'
import React from "react"

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    function handleChange(event) {
        console.log(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}
