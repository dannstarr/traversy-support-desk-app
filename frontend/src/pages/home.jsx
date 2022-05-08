import { Link } from 'react-router-dom'
import { FaQuestionCircle, FaTicketAlt } from 'react-icons/fa'

function Home() {
    return (
        <>
            <section className='heading'>
                <h1>Create New Ticket</h1>
            </section>
            <Link to='/new-ticket' className='btn btn-reverse btn-block'>
                <FaQuestionCircle /> Create New Ticket
            </Link>

            <Link to='/tickets' className='btn btn-block'>
                <FaTicketAlt /> View My Tickets
            </Link>
        </>
    )
}

export default Home