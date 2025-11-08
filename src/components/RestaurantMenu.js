import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  // const resInfo = useRestaurantMenu(resId);
  const resInfo = useRestaurantMenu();

  const [showItems, setShowItems] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  // Through Destrcucturing
  // const {itemCards} =
  // resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

  // console.log("Restaurant Info:", { name, cuisines, costForTwoMessage });
  // console.log("Item Cards:", itemCards);
  // console.log(resInfo);
  // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];
  // console.log(categories,"real");
  // console.log(categories[0]?.card?.card,"1");
  // console.log(categories[1]?.card?.card,"2");

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories &&
        categories.length > 0 &&
        categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showItems ? true : false}
            setShowItems={() =>
              setShowItems(index === showItems ? null : index)
            }
          />
        ))}
    </div>
  );
};

export default RestaurantMenu;
