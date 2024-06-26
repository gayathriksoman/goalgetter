import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">GoalGetter!</span></h1>
            </header>
            <main className="public__main">
                <img className="home_catto" src={`${process.env.PUBLIC_URL}/home_catto.png`} alt="catto" />
                <h2>Make Progress. Make Connections. Grow Together.</h2>
                <button>
                <Link to="/login">Login</Link>
                </button>
                

            </main>
            <footer>
                Created by KS.
            </footer>
        </section>

    )
    return content
}
export default Public