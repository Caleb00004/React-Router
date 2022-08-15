import ServicesData from "./ServicesData"
import {Link, Route, Routes} from 'react-router-dom'
import ServiceDetails from "./ServiceDetails"

export default function Services() {

    const mapServices = ServicesData.map(service => (
        <div key={service._id}>
{/*             <p>{service.name} - ${service.price} <Link to={`${service._id}`}>more.</Link></p> */}
            <p>{service.name} - ${service.price} <Link to={`${service._id}`}>more.</Link></p>
        </div>
    ))
    return (
        <div> 
            <h1>This is the Services Page</h1>
            <p>use's Dynamic Routing</p>
            {mapServices}

        </div>
    )
}