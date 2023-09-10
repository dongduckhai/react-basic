import { useState } from "react"

const User = () => {
    const [firstName, setFirstName] = useState("Kai")
    const [lastName, setLastName] = useState("Dong")
    const [user, setUser] = useState(
        {
            firstName: "John",
            lastName: "Doe"
        }
    )

    function user1HandleOnClick() {
        setFirstName("Đồng Đức")
        setLastName("Khải")
    }
    function user2HandleOnClick() {
        setUser({
            firstName: "Henry",
            lastName: "William"
        })
    }

    return (
        <div>
            <h1>User1 Details</h1>
            <h3>FirstName {firstName}</h3>
            <h3>FirstName {lastName}</h3>
            <button onClick={user1HandleOnClick}>Update user 1 detail</button>
            <h1>User2 Details</h1>
            <h3>FirstName {user.firstName}</h3>
            <h3>FirstName {user.lastName}</h3>
            <button onClick={user2HandleOnClick}>Update user 2 detail</button>
        </div>
    )
}

export default User