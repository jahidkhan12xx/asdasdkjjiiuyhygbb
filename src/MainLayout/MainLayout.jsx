import { Outlet } from "react-router-dom";
import NavBar from "../Components/Header/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;