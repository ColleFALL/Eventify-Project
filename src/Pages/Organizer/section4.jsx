import react from "react";


export default function Section4() {

  return (
    <div className="w-full pb-[10px] sm:pb-0 h-auto  sm:h-160 mt-15 flex flex-col items-center bg-gray-100  text-black ">
      <h3 className=" text-5xl font-bold  "> Success stories from our community</h3>
      <div className="w-[95%] sm:w-[90%] h-auto sm:h-100  flex flex-col sm:flex-row justify-center items-center gap-10 mt-10 ">
        <div className="sm:w-[47%] w-[100%] h-auto py-[15px] sm:px-0 bg-gray-200 h-full flex flex-col rounded-2xl relative ">
        <span className="QuoteContent_quote_mark__2yzEz font-bold text-5xl md:text-9xl sm:ml-20 sm:mt-5" >“</span>
        <p className="text-2xl mb-[35px]  text-center  px-10 sm:mb-[120px]">"If you’re using Eventbrite ticketing, Eventbrite Ads is an obvious place for those advertising dollars to go."</p>
        {/* debut du foot */}
        <div className="flex items-center space-x-3 sm:mb-[25px] p-3 rounded-lg w-fit lg:mb-[40px] md:mt-0 absolute bottom-0 left-0"> 
            <img 
                src="https://i.pinimg.com/1200x/ab/bb/71/abbb715f2dbfd4b24ddbe6b21d9d3816.jpg" 
                alt="Logo The Riot Comedy Club" 
                class="w-12 h-12 rounded-full object-cover"
            />
            <span class="text-gray-800 font-medium text-base text-2xl">The Riot Comedy Club</span>
        </div>
        {/* fin du foot */}
        </div>
        <div className="sm:w-[47%] w-[100%] h-auto py-[15px] sm:px-0 bg-gray-200 h-full flex flex-col rounded-2xl relative ">
        <span className="QuoteContent_quote_mark__2yzEz font-bold text-5xl md:text-9xl sm:ml-20 sm:mt-5">“</span>
        <p className="text-2xl mb-[35px]  text-center px-10 sm:mb-[120px] ">"Ultimately what I need is for people to land on the event page. The more views I have, the more likely I am to sell out."</p>

        {/* debut du foot */}
        <div className="flex items-center space-x-3 sm:mb-[25px] p-3 rounded-lg w-fit lg:mb-[40px] md:mt-0 absolute bottom-0 left-0">
            <img 
                src=" https://i.pinimg.com/736x/d5/2b/3d/d52b3d5eacabc65d9ba5b3e7ffd1779c.jpg" 
                alt="Logo The Riot Comedy Club" 
                class="w-12 h-12 rounded-full object-cover"
            />
            <span class="text-gray-800 font-medium text-base text-2xl ">Drunk Theatre</span>
        </div>
        {/* fin du foot  */}
        </div> 
      </div>
    </div>
  );
}