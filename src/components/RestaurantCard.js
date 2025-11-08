import React from "react";
import { CDN_URL, LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const RestaurantCard = (props) => {
  // console.log("Restaurant data structure:", props.resData);
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla } =
    resData?.info || {};

  const imageUrl = CDN_URL + cloudinaryImageId;
  // console.log("Image URL:", imageUrl);

  const {loggedInUser} = useContext(UserContext);

  return (
    <div
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img className="rounded-lg" alt="res-logo" src={imageUrl} />
      <h3 className="font-bold py-4 text-lg">{resData?.info.name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
      <h4>User: {loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

// Input -RestaurantCard => Output - withPromotedLabel(RestaurantCard)

export const withPromotedLabel = (RestaurantCard) =>{
  return (props)=>{
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}


export default RestaurantCard;
