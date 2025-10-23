import react from "react";
import { Link } from "react-router-dom";             


export default function Section() {
  return (
    <div className="w-full h-250  flex flex-col justify-start items-start bg-gradient-to-r from-[ffb8e5] via-[#ff7d6d]  to-[#ff5112] gap-20 ">
      <div className="mt-6 px-10 w-full h-5 ">
        <a href="#"> Home</a> <span> > </span> <a href="#"> Create Events </a>
      </div>
      
        {/* the big container */}

      <div className="  w-[100%] sm:w-[95%] h-[80%]  bg-[#f5f5f0]  flex column  sm:flex-row sm:justify-center items-center rounded-lg shadow-lg mx-auto">

        {/* Content of the big container */}
        {/* part left  */}

        <div className="sm:w-[55%] sm:h-[90%] h-[50%] w-[100%] flex flex-col justify-center items-start bg-[#f5f5f0] rounded-l-lg px-10"> 
          <h1 className="text-7xl font-bold text-[#161719] mb-10">WHERE EVENT <br /> ORGANIZERS GROW</h1>
          <span className="text-2xl text-[#161719] ">
            The all-in-one ticketing and discovery platform trusted by millions of organizers and attendees worldwide
          </span>

          <div className="mt-20 flex flex-row justify-start items-center">
            <Link to="/create-event"> 
            <button className="bg-[#ff5010] text-white font-bold px-6 py-3 rounded-full border-2 border-[#ff5010] hover:bg-white hover:text-[#ff5010] transition duration-300 mr-5">
              Get Started for free
            </button>
            </Link>
            <Link to="/create-event"> 
            <button className="bg-white text-[#ff5010] font-bold px-6 py-3 rounded-full border-2 border-[#ff5010] hover:bg-[#ff5010] hover:text-white transition duration-300">
              Contact Sales
            </button>
            </Link>
          </div>
        </div>

        {/* part right */}

        <div  className="  hidden sm:block sm:w-[45%] sm:h-[90%]   flex flex-col justify-center items-center  rounded-l-lg">
            <img className="w-full h-full object-cover pr-5 rounded-l-lg " src="https://images.ctfassets.net/cocwkk0wzcrd/4L29qZnC9N8ZPyf9Qx2bke/e2a36dd340cfd72864c86e45da1f2cf2/a-creator-home__hero-001.jpg" ></img>
        </div>
        
      </div>
    </div>
  );
}