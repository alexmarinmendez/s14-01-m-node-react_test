import { useEffect } from "react";

const LinkedinAuth = () => {
    // const [user, setUser] = useState({});
    // const [error, setError] = useState(false)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://s14-01-m-node-react.vercel.app/api/v1/signin-with-linkedin/authorize", {
                    method: "GET", // *GET, POST, PUT, DELETE, etc.
                    mode: "no-cors", // no-cors, *cors, same-origin
                    headers: {
                        //   "Content-Type": "application/json",
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                });
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