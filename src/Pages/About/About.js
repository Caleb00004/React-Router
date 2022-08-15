import {Link, Routes, Route} from 'react-router-dom'
import Location from './Location'
import Name from './Name'


export default function About(props) {
    return (
        <div>
        <h1>About Page {props.name}</h1>

        {/* Nested Route */}
        <li> <Link to='location'>Location</Link> </li>
        <li> <Link to='name'>Name</Link> </li>

        <Routes>
            <Route index element={<Location/>}/> {/* index route- will render at parent route */}
            <Route path='location' element={<Location/>}/>
            <Route path='name' element={<Name />} />
        </Routes> 
        </div>

    )
}