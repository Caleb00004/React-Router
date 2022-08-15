import { useNavigate } from "react-router-dom"

export default function Order() {
    const goBack = useNavigate()

    return (
        <>
            <h1>Order Confirmed</h1>
            <button onClick={() => goBack(-1)}>Go Back</button>
        </>
    )
}