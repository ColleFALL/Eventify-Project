import { useState } from 'react'



 export default function Count() {
  const [rajouter, setRajouter] = useState(15)
  const valeur = 7;
  const handleClick = () => { setRajouter(rajouter + valeur)}
    const handleClick1 = () => {setRajouter(rajouter - valeur >= 0 ? rajouter - valeur : 0)};
  const handleClick2= () => { setRajouter(0)}
  
 
  return (
    <>
    
    
    <button onClick={handleClick} className="bg-gray-200 border-1 border-black p-1rounded-lg ">
      rajouter de : {valeur}
    </button>
    <div>le nombre est : {rajouter}</div>


        <button onClick={handleClick1} className="bg-gray-200 border-1 border-black p-1rounded-lg ">
      decrementer  de :{valeur}
    </button>
                          
         <button onClick={handleClick2} className="bg-gray-200 border-1 border-black p-1rounded-lg ">
      Initialiser a  :{0}
    </button>
    
      
      
    </>
  )
}