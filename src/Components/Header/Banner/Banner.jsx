

const Banner = ({handleSearch}) => {
    return (
        <div>
            <div className="hero min-h-[50vh] mb-36" style={{backgroundImage: 'url(https://i.ibb.co/Qnjk6P9/group-of-volunteer-preparing-donations-1024x435.jpg)'}}>
  <div className="hero-overlay bg-opacity-90 bg-white"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className=" flex flex-col justify-center items-center">
      <div className=" pb-3">
      <h1 className="mb-5 text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
      </div>
      
  
      <div className="form-control">
                <form onSubmit={handleSearch} className="input-group">
                    <input type="text" placeholder="Search here…" className="input input-bordered text-[#FF444A]" />
                        <button className="btn btn-square w-28 bg-[#FF444A] text-white border-none hover:bg-white hover:text-[#FF444A]">
                         Search
                        </button>
                </form>
    </div>
  
</div>
    </div>
  </div>
</div>
    );
};

export default Banner;