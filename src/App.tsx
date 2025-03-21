import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/message";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        axios.get(API_URL)
            .then((res) => setMessage(res.data.message))
            .catch(console.error);
    }, []);

    return <h1>{message || "Loading..."}</h1>;
}

export default App;
