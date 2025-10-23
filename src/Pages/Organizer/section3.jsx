import react from "react";

 export default function Section3(){ 
    return (  
    <div className="w-full h-auto  sm:h-160  flex flex-col items-center gap-2 bg-gray-100  text-black ">
      <h3 className=" text-2xl font-semibold "> Eventbrite All Access </h3>
      <p className="text-5xl font-bold text-center">Trends and insights from industry experts</p>
      <div className="w-[95%] sm:w-[90%] h-auto sm:h-100 bg-gray-100  flex flex-col sm:flex-row justify-center items-center gap-5 mt-10">
        

        {/* div de gauche */}
        <div className="w-full sm:w-1/3 h-full flex flex-col">
          <img src="https://www.seneguide.com/images/cache/share_facebook/images/category/13/fete-senegal.jpg" alt="Photo d'un concert" className="w-full h-[60%] object-cover"/>
          <h1 className="text-2xl font-bold">How to Sell Tickets: A Guidebook for Event Organizers</h1>
          <p className="">Eventbrite’s community of event creators sold 284 million tickets in 2022. Want to know how?</p><br />
          <a href="#"><div className="flex flex-row ">Discover how to host a sold-out event <span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg></span>
            </div>
          </a>
        </div> 

        {/* div du milieu */}

        <div className="w-full sm:w-1/3 h-full flex flex-col">
          <img src="https://i.pinimg.com/736x/b5/07/7f/b5077fe5494f38bb95b2332b020b6ecb.jpg" alt="Photo d'un concert" className="w-full h-[60%] object-cover"/>
          <h1 className="text-2xl font-bold">9 Insider Tips for Building Your Events Community</h1>
          <p className="">Event creators who sustain thriving communities often start from scratch. It’s a mixture of strategies, programming, dedication, and guts that make steady growth — and significant impact — possible.</p>
          <a href="#"><div className="flex flex-row ">See how to build your community <span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg></span>
            </div>
          </a>
        </div>

        {/* div de droite  */}

        <div className="w-full sm:w-1/3 h-full flex flex-col">
          <img class="ImageBlock_image_block__DhORp" src="https://images.ctfassets.net/cocwkk0wzcrd/5c1PSWfvY7QiZy119dq2gh/c7ba3a58ffeeaaf516a07829b1f5f353/a--categories__food.png?w=1400 "className="w-full h-[60%] object-cover"/>
          <h1 className="text-2xl font-bold">104 Event Themes + Real Examples to Inspire Your Next Event</h1>
          <p className="">Not feeling creative? Here’s a laundry list of event theme ideas to adopt or alter for your next event..</p> <br />
          <a href="#"><div className="flex flex-row ">Explore creative event themes  <span> 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
            </svg></span>
            </div>
          </a>
        </div>
      </div>
    </div>
    );
 }