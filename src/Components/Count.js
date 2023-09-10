import { useState } from "react"

const Count = () => {

    const [count, setCount] = useState(0)

    function handleOnClick() {
        setCount(count + 1)
    }
    function handleReset() {
        setCount(0)
    }

    return (
        <div>
            <h1>Event Handling</h1>
            <h2>{count}</h2>
            <button onClick={handleOnClick}>Increase</button> <br/>
            <button onClick={handleReset}>Reset</button>
        </div>
    )

}
export default Count