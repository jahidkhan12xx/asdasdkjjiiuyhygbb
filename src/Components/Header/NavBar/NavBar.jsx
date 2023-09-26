import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div>

            <div className=" flex md:flex-row flex-col justify-center items-center p-3 md:justify-between md:items-center container mx-auto mt-11">
                <div className=" pb-3">
                    <img src="../../../../public/Logo.png" alt="" />
                </div>
                <div className=" flex gap-12">
                <NavLink to="/" className={
                    ({ isActive, isPending }) =>isPending ? "pending" : isActive ? "border-b-2 border-[#FF444A] text-[#FF444A] text-lg font-bold" : "text-lg font-normal"
                    }
                >
                    Home
                
                </NavLink>
                <NavLink to="/donation" className={
                    ({ isActive, isPending }) =>isPending ? "pending" : isActive ? "border-b-2 border-[#FF444A] text-[#FF444A] text-lg font-bold" : " text-lg font-normal"
                    }
                >
                    Donation
                
                </NavLink>
                <NavLink to="/statistics" className={
                    ({ isActive, isPending }) =>isPending ? "pending" : isActive ? "border-b-2 border-[#FF444A] text-[#FF444A] text-lg font-bold" : "text-lg font-normal"
                    }
                >
                    Statistics
                
                </NavLink>
                </div>
            </div>
            
        </div>
    );
};

export default NavBar;