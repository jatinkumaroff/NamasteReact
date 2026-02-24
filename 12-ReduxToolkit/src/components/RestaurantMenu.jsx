import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

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
  const { resId } = useParams();
  const { menuData, error, isLoading } = useRestaurantMenu(resId);

  if (error) {
    return (
      <div>
        <h1>MENU PAGE</h1>
        <p>Failed to load menu: {error}</p>
        <p>Check backend server at http://localhost:3000</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h1>{resId}</h1>
        <h1>MENU PAGE</h1>
        <p>Loading menu...</p>
      </div>
    );
  }

  if (!menuData.length) {
    return (
      <div>
        <h1>MENU PAGE</h1>
        <p>No menu items found for this restaurant.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>MENU PAGE</h1>
      <ul>
        {menuData.map((item) => {
          const info = item?.card?.info;
          const price = (info?.price || info?.defaultPrice || 0) / 100;
          return (
            <li key={info?.id}>
              {info?.name} {price ? `- Rs. ${price}` : ""}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestrauntMenu;
