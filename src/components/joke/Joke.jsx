const Joke = ({setup, delivery, joke}) => {
    return (
        <pre style={{ backgroundColor: "black", color: "white", textAlign: "center", margin: "1rem auto 0 auto", width: "50%"}}>
        {setup || delivery ? setup && delivery : joke}
        </pre>
    );
};

export {Joke};