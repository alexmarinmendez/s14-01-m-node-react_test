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
                    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                    credentials: "same-origin", // include, *same-origin, omit
                    headers: {
                        //   "Content-Type": "application/json",
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    redirect: "follow", // manual, *follow, error
                    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
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