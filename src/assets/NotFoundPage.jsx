import { Link } from "react-router-dom"

const NotFoundPage = () => {

    return (
        <>
        <h1>Not Found Page </h1>
        <Link to={"/"}>
        <button> Go back to Home </button>
        </Link>
    
        </>
    );
};

export default NotFoundPage;
