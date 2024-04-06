import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import useTitle from '../../hooks/useTitle'
import './Welcome.css'

const Welcome = () => {

    const { username, isManager, isAdmin } = useAuth()

    useTitle(`Goals: ${username}`)

    const date = new Date()
    const today = new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'long' }).format(date)

    const content = (
        <section className="welcome">

            <p>{today}</p>

            <h1>Welcome {username}!</h1>
            <div className="welcome-nav-wrapper">


                <Link to="/dash/notes"><div className="welcome-nav">View Goals</div></Link>

                <Link to="/dash/notes/new"><div className="welcome-nav">Add New Goal</div></Link>

                <Link to="/dash/users"><div className="welcome-nav">View User Settings</div></Link>

                {(isManager || isAdmin) && <Link to="/dash/users/new"><div className="welcome-nav">Add New User</div></Link>}
            </div>

        </section>
    )

    return content
}
export default Welcome