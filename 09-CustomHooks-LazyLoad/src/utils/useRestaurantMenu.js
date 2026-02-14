import { useEffect, useState } from "react";

const useRestaurantMenu= (resId)=>{
    const [resInfo,setResInfo] = useState(null); 
    
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData= async ()=>{
        const data= await fetch("MENU API HERE" +  resId);
        const json= await data.json()
        setResInfo(json.data);

    }
    
    return resInfo;     //local state variable
}


export default useRestaurantMenu;