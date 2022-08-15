import { useNavigate } from "react-router-dom"

export default function Home(props) {
    const myNavigate = useNavigate()
    console.log(props)
    return (
        <>
            <span><h1>The HomePage! </h1>
            <p>Use's useNavigate hook</p></span>
            <button onClick={() => myNavigate('order-confirmed')}>Place order</button> 

        </>

    )
}