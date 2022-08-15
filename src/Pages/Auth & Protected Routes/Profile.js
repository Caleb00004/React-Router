import { Consumer } from "../../auth"
import { useNavigate } from "react-router-dom"

export default function Profile() {
//    console.log(Consumer)
    const loginNavigate = useNavigate()

    return (
        <Consumer>
            {contextData => {
                console.log(contextData.user)
                if (contextData.user) {
                    return (
                        <>  
                            <br></br>
                            <h3>A Protected Route</h3>
                            <h1>Profile Page</h1>
                            <p>Welcome {contextData.user}</p>
                            <button onClick={contextData.logout}>log out</button>
                        </>
                    )
                } else {
                    return (
                        <>  
                            <br></br>
                            <h3>A Protected Route</h3>
                            <h1>Login bitch!!</h1>
                            <button onClick={() => loginNavigate('/login')}>Login</button>
                        </>
                    )
                }
            }}

        </Consumer>
    )    
}