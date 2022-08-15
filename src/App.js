import {NavLink, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services/Services'
import ServiceDetails from './Pages/Services/ServiceDetails'
import Order from './Pages/Order'
import InvalidPath from './Pages/invalidPath'
import React from 'react'
import Profile from './Pages/Auth & Protected Routes/Profile'
import Login from './Pages/Auth & Protected Routes/Login'
import { AuthProvider } from './auth' 
import './style.css'
const LazyTest = React.lazy(() => import('./Pages/Test'))
//import TestBulky from './Pages/Test'



export default function App() {

    return (
        <AuthProvider>
            <h1>App Component</h1>
            <nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <NavLink to='services'>services</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/test'>Test</NavLink>
                <NavLink to='/profile'>Profile</NavLink>

            </nav>

            <Routes>
                <Route exact path='/' element={<Home />} /> {/*  */}
                <Route path='/about/*' element={<About />} /> {/* Uses Nested Routes */}
                <Route path = '/login' element={<Login />}/>
                <Route path = '/contact' element={<Contact />}/>
                <Route path='/profile' element={<Profile />} /> {/* A protected Route */}
                <Route path='/test' element={
                    <React.Suspense fallback="loading...">
                        <LazyTest />
                    </React.Suspense>
                    }/>
                <Route path='/services/*' element={<Services />} /> {/* Uses Dynamic Routing */}
                <Route path='services/:serviceId' element={<ServiceDetails />}/> {/* Uses Dynamic Routing */}
                <Route path='/order-confirmed' element={< Order/>}/>
                <Route path='*' element={<InvalidPath />}/> {/* To handle paths that don't exist */}

            </Routes>
        </AuthProvider>
    )

}

