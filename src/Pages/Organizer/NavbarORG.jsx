import react from "react";


function Navbar() {
  return (
      <div className="w-screen h-16 bg-amber-600">
        <h1 className="text-lg font-bold">Eventify</h1>
        <button className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
      </div>


    
  );
}

export default Navbar;