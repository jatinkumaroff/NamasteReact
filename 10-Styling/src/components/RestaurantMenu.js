import { useEffect } from "react";
import { useParams } from "react-router-dom";



/* custom hook to fetch the data:=> 
   instead of:
     const params= useParams();
    console.log(params);
    useEffect(() => {
      fetchMenu();
    }, []);
  
    const fetchMenu= async ()=>{
      const data= await fetch("")
    }
*/



const RestrauntMenu = () => {
  return (
    <div>
      <h1>MENU PAGE</h1>
      <h1>DISH 1</h1>
      <h1>DISH 2</h1>
      <h1>DISH 3</h1>
    </div>
  );
};

export default RestrauntMenu;
