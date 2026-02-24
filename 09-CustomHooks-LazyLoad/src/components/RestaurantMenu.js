import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { urlMenuId } from "../../liveData";
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

// {resData.map((restraunt) => (
        //   <RestrauntCard key={restraunt.info.id} resData={restraunt} />
        // ))}

const RestrauntMenu = () => {
  const restId="";
  const fetchMenu=async ()=>{
    const data=fetch(urlMenuId+restId)
  }



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
