import { useEffect, useState } from "react";


import Chart from "react-apexcharts"



const Statistics = () => {

    const [donation,setDonation] = useState(0);

    useEffect(()=>{
        const localData = JSON.parse(localStorage.getItem("donator"));
        if(localData){
            setDonation(localData.length);
        }
        else{
            setDonation(0);
        }
    },[])

    



    const myDonation = ((donation/12)*100);
    const totalDonation = 100-myDonation;
      
    
    return (
        <div className=" container mx-auto flex justify-center items-center min-h-[75vh]">

            <Chart
            type="pie"
            width={600}
            height={550}

            series={[myDonation,totalDonation]}

            options={{
                labels:['My Donation','Total Donation'],
                colors:["#00C49F","#FF444A"],
                legend: {
                  show: true,
                  fontSize: '28px',
                  fontFamily: 'Arial, sans-serif',
                  fontWeight: 'bold',
                  textAnchor: 'middle',
                  labels: {
                    colors: '#333', 
                  },
                  markers: {
                    width: 50,       
                    height: 20,      
                    radius: 0,       
                    shape: 'rect',   
                    strokeWidth: 2,  
                    strokeColor: '#000', 
                    fillColors: ['#00C49F', '#FF444A'], 
                  },
                  position: 'bottom',
                },
                responsive: [
                  {
                    breakpoint: 425, 
                    options: {
                      chart: {
                        width: 300,
                      },
                      legend: {
                        position: 'bottom',
                      },
                    },
                  },
                  {
                    breakpoint: 768, 
                    options: {
                      chart: {
                        width: 400,
                      },
                      legend: {
                        position: 'bottom',
                      },
                    },
                  },
                  {
                    breakpoint: 1024, 
                    options: {
                      chart: {
                        width: 500,
                      },
                      legend: {
                        position: 'bottom',
                      },
                    },
                  },
                  {
                    breakpoint: 1441, 
                    options: {
                      chart: {
                        width: 900,
                      },
                      legend: {
                        position: 'bottom',
                      },
                    },
                  },
                ],
                  
            }}

            
            >

            </Chart>

        </div>
    );
};

export default Statistics;