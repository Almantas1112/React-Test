import { useEffect, useState } from "react";
import {Joke} from "../joke/Joke";

const Jokes = () => {
    const [data, setData] = useState([]);
    const [errorMsg, setErrorMsg] = useState("");

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
        .then((res) => res.json())
        .then(
            (result) => {
                setData(result.jokes);
            },

            (error) => {
                setErrorMsg(error.message);
            }
        );
    }, []);

    return (
    <>
    {errorMsg ? errorMsg : ""}
    {data.map((joke, id) => (
        <Joke key={id} setup={joke.setup} delivery={joke.delivery} joke={joke.joke}/>
    ))}{""}
    </>
    );
}

export {Jokes};