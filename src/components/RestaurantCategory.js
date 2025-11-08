import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = ({ data,showItems,setShowItems }) => {
  // console.log(data, "props");

  // const [showItems, setShowItems] = useState(false);

  // const handleClick = () => {
  //   console.log("clicked");
  //   setShowItems(!showItems);
  // };

   const handleClick = () => {
   setShowItems();
  };

  return (
    <div>
      {/* Header */}
      <div
        onClick={handleClick}
        className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 cursor-pointer"
      >
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>

        {/* Accordion Body */}
        {showItems && <ItemList items={data.itemCards} /> }
      </div>
    </div>
  );
};
export default RestaurantCategory;
