import { useEffect, useState } from "react"



//no input needed       ,       //returns true/false
const useOnlineStatus=()=>{

    const [onlineStatus,setOnlineStatus]=useState(true);
    // check if online,
    //browser give us inside Window-> online Event
    useEffect(()=>{
        //logic to check online status;
        //event listener, that triggers on going offline and sets onlineStatus to false 
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])

    // returns boolean
    return onlineStatus
}

export default useOnlineStatus;