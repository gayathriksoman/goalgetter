import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">GoalGetter!</span></h1>
            </header>
            <main className="public__main">
                <p>
                    🌟 Ready to turn your goals into reality? Welcome to Goal Getter—the ultimate hub for goal-setters like you! 🚀💪
                </p>
                <p>
                    👯‍♀️ Dive into a community where your dreams are celebrated and your progress is cheered on. With Goal Getter, it's not just about YOUR goals—it's about supporting each other to reach new heights. 🌈✨
                </p>
                <p>
                    💥 Get inspired by seeing what your peers are working towards and join forces to crush your goals together! 🤝 Let's make every step count. Join the movement now! #GoalGetter #DreamBigAchieveBigger 💫📈
                </p>
                

            </main>
            <footer>
                <Link to="/login">Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public