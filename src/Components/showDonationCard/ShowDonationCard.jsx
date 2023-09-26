

const ShowDonationCard = ({data}) => {
    const {img,title,cat_title,cat_bg_color,card_bg_color,font_color,description,donate_amount} = data;
    return (
        <div className=" mx-auto container">
            <div style={{backgroundColor : card_bg_color}} className="relative flex flex-row rounded-xl bg-clip-border text-gray-700 shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
    <img
      src={img}
      alt="image"
      className="h-full w-full object-cover"
    />
  </div>
  <div className="p-6">
    <span style={{backgroundColor : cat_bg_color , color : font_color}} className="mb-4 font-sans font-semibold uppercase leading-relaxed tracking-normal t antialiased inline-block px-2 rounded-md">
      {cat_title}
    </span>
    <h4  className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p style={{color: font_color}} className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      ${donate_amount}
    </p>
    <a className="inline-block" href="#">
      <button style={{backgroundColor: font_color}}
        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        View Details
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          ></path>
        </svg>
      </button>
    </a>
  </div>
</div>
        </div>
    );
};

export default ShowDonationCard;