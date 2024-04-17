import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome</h1>
            <hr />
            <Link to="/signin-with-linkedin"><img src="linkedin-signin-small-default.png" /></Link>
            <hr />
            &copy; 2024
        </div>
    )
}

export default Home