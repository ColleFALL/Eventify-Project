import react from "react"

 export default function Section2(){
   return (
    <div className="w-full  h-auto sm:h-160 pb-[10px] sm:pb-0  flex flex-col items-center bg-gray-100 gap-10 ">
          <h1 className="text-5xl font-bold text-center">Host events and grow your community</h1>
          <p className="text-2xl text-center">From event ticketing to payment collection, tools to promote, market, and manage your events seamlessly.</p>
          <div className="flex flex-col items-center pb-[10px] sm:pb-0 w-full h-[60%] bg-gray  rounded-lg shadow-lg  gap-10 sm:flex-row sm:justify-center">
            {/* card de gauche1 */}
            <div class="relative flex w-96 flex-col rounded-xl bg-[#ff531a] text-2xl  bg-clip-border text-white shadow-md">
                <div class="p-6">
                    <h3  class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Event Ticketing
                    </h3>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Everything you need to sell tickets for in-person or online events
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button
                    class="select-none rounded-lg bg-[#fef3c6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                    >
                    See Ticketing Tools
                    </button>
                 </div>
            
            </div>
            {/* card du gauche2  */}

            <div class="relative flex w-96  flex-col rounded-xl bg-[#ff531a] text-2xl  bg-clip-border text-white shadow-md">
                <div class="p-6">
                    <h3 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Eventbrite Ads

                    </h3>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        Create no-hassle ads that promote your event on Eventbrite
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button
                    class="select-none rounded-lg bg-[#fef3c6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                    >
                    Explore Evenbrite Ads
                    </button>
                 </div>
            
            </div>
            {/* card de droite1 */}


                        <div class="relative  flex w-96 flex-col rounded-xl bg-[#ff531a] text-2xl  bg-clip-border text-white shadow-md">
                <div class="p-6">
                    <h3 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Marketing Tools
                    </h3>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                   All the event marketing tools you need in one place easily to use
                    </p>
                </div>  
                <div class="p-6 pt-0">
                    <button
                    class="select-none rounded-lg bg-[#fef3c6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                    >
                    See Marketing Tools
                    </button>
                 </div>
            
            </div>
            {/* card de droite2 */}
            <div class="relative flex  w-96 flex-col rounded-xl bg-[#ff531a] text-2xl bg-clip-border text-white shadow-md">
                <div class="p-6">
                    <h3 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Payments
                    </h3>
                    <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    Easily collect and simplify event payments in all over the world
                    </p>
                </div>
                <div class="p-6 pt-0">
                    <button
                    class="select-none rounded-lg bg-[#fef3c6] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-black shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                    data-ripple-light="true"
                    >
                    Discover Payments Tools
                    </button>
                 </div>
            
            </div>

          </div>
    </div>
  );
}