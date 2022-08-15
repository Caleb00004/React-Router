import { useParams } from "react-router-dom"
import ServicesData from "./ServicesData"

export default function ServiceDetails() {
    const {serviceId} = useParams()

    const index = serviceId - 1

    let details = (
        <>
            <h1>details Page </h1>
            <h1>serice Name - {ServicesData[index].name} </h1>
            <h3>price - {ServicesData[index].price}</h3>
            <p>Description - {ServicesData[index].description}</p>
        </>
                
    )

    return (
        details
    )
}