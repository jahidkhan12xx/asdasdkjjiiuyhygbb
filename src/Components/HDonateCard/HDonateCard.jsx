import { NavLink } from "react-router-dom";


const HDonateCard = ({data}) => {

    const {id,img,title,cat_title,cat_bg_color,card_bg_color,font_color,description,donate_amount} = data;
    
    return (
        <div>
            <NavLink to={`/${id}`}>
            <div  style={{backgroundColor : card_bg_color}} className="">
                <div>
                    <img className="w-full" src={img} alt="" />
                </div>
                <div className=" py-4 pl-3">
                    <span style={{backgroundColor : cat_bg_color, color: font_color}} className="px-2 py-1 text-sm font-medium rounded-md">{cat_title}</span>
                    <h2 style={{color : font_color}} className=" text-xl font-semibold">{title}</h2>

                </div>

            </div>

            </NavLink>
        </div>
    );
};

export default HDonateCard;