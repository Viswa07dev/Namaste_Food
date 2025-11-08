import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("Header rendered");

  // If no dependency array ==> useEffect is called on every render
  // useEffect(()=>{
  //   console.log("useEffect called");
  // });
  // If dependency array is empty = [] ==> useEffect is called only on initial render(just once)
  // useEffect(()=>{
  //   console.log("useEffect called");
  // },[]);
  // If dependency array is [btnName] ==> useEffect is called everytime btnName is updated(changes).
  useEffect(() => {
    // console.log("useEffect called");
  }, [btnName]);

  // const data = useContext(UserContext);
  // console.log(data.loggedInUser);

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  const onlineStatus = UseOnlineStatus();

  //Subscribing to the store using a  Selector

  const cartItems = useSelector((store) => {
    console.log("store.cart:", store.cart);
    return store.cart.items;
  });
  console.log(cartItems,"cart items list");
  

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">OnlineStatus: {onlineStatus ? "✅" : "👹"}</li>
          <li className="px-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          {/* <li className="px-4 font-bold text-xl">Cart ({cartItems.length} items)</li> */}
          <button
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 -mt-2 rounded"
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
