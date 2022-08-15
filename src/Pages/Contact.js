import { Link, useSearchParams } from "react-router-dom"

export default function Contact() {
    const [active, setActive] = useSearchParams()
    const getActiveContacts = active.get('filter') === 'active'

    return (
        <>
            <h1>Contact Page</h1>
            <button onClick={() => setActive({filter: 'active'})}>Active contacts</button>
            <button onClick={() => setActive({})}>reset contacts</button>
            {console.log(getActiveContacts)}
            <h1>{getActiveContacts ? 'user1 Active': 'No active users'}</h1>
        </>
    )
}