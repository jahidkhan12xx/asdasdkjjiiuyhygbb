import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";

import { useEffect, useState } from "react";
import HDonateCards from "../../Components/HDonateCard/HDonateCards";


const Home = () => {
    const handleSearch = (e)=>{
        e.preventDefault();
        setText(e.target[0].value);

    }

    const allDonationData = useLoaderData();
    const [text,setText] = useState("");
    const [newData,setNewData] = useState([]);

    useEffect(()=>{

        const nData = allDonationData.filter(fData => fData.cat_title.toLowerCase().includes(text.toLowerCase()));

        setNewData(nData);

        
    },[allDonationData,text])


    
    
     
    return (
        <div className=" my-7 ">
            <Banner handleSearch={handleSearch}></Banner>
            {
                
                    newData.length>0 ? <HDonateCards data={newData}></HDonateCards> : <HDonateCards data={allDonationData}></HDonateCards>
    
                    
                
            }
        </div>
    );
};

export default Home;