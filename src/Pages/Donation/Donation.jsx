
import { useEffect, useState } from "react";
import ShowDonationCard from "../../Components/showDonationCard/ShowDonationCard";


const Donation = () => {

    const [donation,setDonation] = useState([]);
    const [notFound,setNotFound] = useState(false);
    const [showAll,setShowAll] = useState(false);


    useEffect(()=>{
        const savedData = JSON.parse(localStorage.getItem("donator"));
        

        if(savedData){
            setDonation(savedData)
        }
        else{
            setNotFound("No Data")
        }
    },[])

    
    return (
        <div className="">

            {
                notFound? <p className=" flex justify-center items-center h-[80vh] font-extrabold text-4xl">No data found</p> : <div className=" flex flex-col justify-center items-center">

                    <div className=" grid grid-cols-1 md:grid-cols-2 container mx-auto gap-4">
                    {
                        showAll ? donation.map((data,id) => <ShowDonationCard key={id} data={data}></ShowDonationCard>) :
                        donation.slice(0,4).map((data,id) => <ShowDonationCard key={id} data={data}></ShowDonationCard>)
                    }
                    </div>
                    <div className=" my-6">
                    {
                        donation.length>4 && <button onClick={()=> setShowAll(!showAll)} className="px-5 py-2 text-lg font-semibold text-black hover:bg-[red] hover:text-white  mx-auto rounded-md">{showAll? "" : "Show All"}</button>
                    }
                    </div>
                </div>
            }
        </div>
    );
};

export default Donation;