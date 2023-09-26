import HDonateCard from "./HDonateCard";


const HDonateCards = ({data}) => {
    
    return (
        <div className=" grid grid-cols-2 md:grid-cols-4 my-28 container mx-auto gap-6">
            {
                data.map(filData => <HDonateCard key={filData.id} data={filData}></HDonateCard>)
            }
        </div>
    );
};

export default HDonateCards;