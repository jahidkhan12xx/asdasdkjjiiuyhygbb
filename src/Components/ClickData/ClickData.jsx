import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const ClickData = () => {


    const clickedData = useLoaderData();
    const {id} = useParams();

    const [findDonate,setFindDonate] = useState([]);

    

    useEffect(()=>{

        const findData = clickedData.find(data => data.id === id);
        setFindDonate(findData);
    },[clickedData,id])

    const setToDonation = () =>{

        const savedData = JSON.parse(localStorage.getItem("donator"));

        const collectedData = [];

        if(!savedData){
            collectedData.push(findDonate);
            localStorage.setItem("donator",JSON.stringify(collectedData));
            toast.success('Successfully added to donation', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });

        }
        else{
            
            const isExist = savedData.find(data => data.id == id );
            if(!isExist){
                collectedData.push(...savedData,findDonate);
            localStorage.setItem("donator",JSON.stringify(collectedData))
            toast.success(' Successfully added to donation', {
                style: {
                  border: '1px solid #713200',
                  padding: '16px',
                  color: '#713200',
                },
                iconTheme: {
                  primary: '#713200',
                  secondary: '#FFFAEE',
                },
              });
            }
            else{
                
                toast.error('Already in Donation', {
                    style: {
                      border: '1px solid #713200',
                      padding: '16px',
                      color: '#713200',
                    },
                    iconTheme: {
                      primary: '#713200',
                      secondary: '#FFFAEE',
                    },
                  });
            }
            
        }

        
        

    }

    const {img,title,cat_title,cat_bg_color,card_bg_color,font_color,description,donate_amount} = findDonate;
    return (
        <div>
            <div><Toaster position="top-right"
  reverseOrder={false}/></div>
            <div className=" container mx-auto mt-5">
                <div className=" relative">
                    <img className=" w-full h-[58vh]" src={img} alt="" />
                    <div className=" bg-black w-full h-[15vh] absolute opacity-50 bottom-0"></div>
                    <button onClick={setToDonation} style={{backgroundColor : font_color}} className=" btn btn-success absolute bottom-0 md:bottom-10 left-5 md:left-12 text-white border-none ">Donate : ${donate_amount}</button>
                </div>
                <div>
                    <h3 className=" text-4xl font-bold pb-6 pt-14">{cat_title}</h3>
                    <p className=" text-base font-normal text-[#0B0B0B70]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ClickData;