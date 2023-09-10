import { useState } from "react";

const ConditionRender = () => {

    const [isLogIn, setIsLogIn] = useState(false);

    const handleLogin = () => {
        setIsLogIn(true);
    }
    const handleLogOut = () => {
        setIsLogIn(false);
    }

    if(isLogIn) {
        return (
            <div>
                <h2>Welcome</h2>
                <button onClick={handleLogOut}>Logout</button>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Please Login</h2>
                <button onClick={handleLogin}>Login</button>
            </div>
        )
    }

} 
export default ConditionRender;