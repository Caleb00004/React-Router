import { Consumer } from '../../auth'

function Login () {

    let userName = ''

    function handleForm(event) {
        userName = event.target.value
        console.log(userName)
    }
    return (
        <Consumer>
            {consumerData => (
                <>
                    <h1>Login Page</h1>
                    <input onChange={handleForm} type={'text'}></input>
                    <button onClick={() => consumerData.login(userName)}>Login</button>
                </>
            )}
        </Consumer>
    )
}
export default Login