import { useEffect } from "react";

const LinkedinAuth = () => {
    // const [user, setUser] = useState({});
    // const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("http://s14-01-m-node-react.vercel.app/api/v1/signin-with-linkedin/authorize");
                const user = await response.json();
                console.log(user);
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
    }, []);
    return (
        <>
            Hola Mundo
        </>
    )
}

export default LinkedinAuth