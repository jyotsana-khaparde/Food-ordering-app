import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    console.log(err);
return (
    <div>
        <h1>Ooops!!!</h1>
        <h2>Something went wrong</h2>
        <span>{err.status}: {err.statusText}</span>
    </div>
)
}

export default Error;