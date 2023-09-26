import { useNavigate } from "react-router-dom";


const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBack = () =>{
        navigate(-1);
    }
    return (
        <div className=" flex flex-col justify-center items-center min-h-screen ">
            <h3 className=" text-5xl font-extrabold text-red-700 pb-4">Oops!! 404 Not Found</h3>
            <button onClick={handleBack} className="btn btn-warning">Go Back</button>
        </div>
    );
};

export default ErrorPage;