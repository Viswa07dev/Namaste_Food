import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  // console.log(items, "itemList");

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    console.log("Item Added", items);
    dispatch(addItem(item));
  };

  return (
    <div>
      {
        items
          ?.filter((item) => item?.card?.info)
          .map((item, index) => (
            <div
              key={`${item.card.info.id}-${index}`}
              className="m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between"
            >
              <div className="w-9/12">
                <div className="py-2">
                  <span>{item.card.info.name}</span>
                  <span>
                    {" "}
                    - ₹{" "}
                    {item.card.info.defaultPrice / 100 ||
                      item.card.info.price / 100}{" "}
                  </span>
                </div>
                <p className="text-xs">{item.card.info.description}</p>
              </div>
              <div className="w-3/12 p-4 ">
                <div className="absolute">
                  <button
                    className="p-2 mx-auto rounded-lg bg-black text-white shadow-lg"
                    onClick={() => handleAddItem(item)}
                  >
                    Add +
                  </button>
                </div>
                <img
                  src={CDN_URL + item.card.info.imageId}
                  className="w-full"
                />
              </div>
            </div>
          ))
        // <h2>
        //   {items[0].card.info.name} {items[0].card.info.description}{" "}
        //   {items[0].card.info.defaultPrice}
        // </h2>
      }
    </div>
  );
};

export default ItemList;
