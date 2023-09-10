import React from "react"
const Welcome = ({ name, age }) => {
    // const { name, age } = props  //destructuring cách 2

    function handleClick(){
        alert("Welcome " + name)
    }

    return (
        <div>
            <h1 className = "title">Hello, Welcome {name} </h1>
            <h2>Age: {age}</h2>
            <button onClick = {handleClick} >Click me</button>
        </div>
    )    
}
export default Welcome