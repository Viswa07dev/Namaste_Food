import { useState } from "react";

const User = ({name}) => {
  const [count,setCount] = useState(0);
  const [count2] = useState(1);
  return(
    <div className="user-card">
      <button><h1 onClick={()=>{
        setCount(count+1);
      }}>{count}</h1></button>
      <h2>{count2}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: Hyderabad</h3>
      <h4>Contact: 1234567890</h4>
    </div>
  )
};

export default User;