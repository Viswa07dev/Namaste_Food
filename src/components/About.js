import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";


// Class Based Component
class About extends React.Component {

  constructor(props){
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount(){
    console.log("Parent - componentDidMount");
  }

  render(){
   console.log("Parent - render");
  return(
    <div>
      <h1>About Class Component</h1>
      <div>
        <UserContext.Consumer>
          {({loggedInUser})=><h1 className="font-bold text-xl ">Logged in User: {loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
      <h2>This is Namaste React Web series</h2>
       {/* Functional based component */}
      {/* <User name={"Viswa (function)"} /> */}
      {/* class based component */}
      <UserClass name={"First (class-based)"} contact="12341" location={"Hyd (class)"} />
      {/* <UserClass name={"Second (class-based)"} contact="0728" location={"Ranchi (class)"} />
      <UserClass name={"Third (class-based)"} contact="0123" location={"AP (class)"} /> */}
    </div>
  )
}
}

// Functional Based Component

// const About = () => {
//   return(
//     <div>
//       <h1>About Functional Component</h1>
//       <h2>This is Namaste React Web series</h2>
//       {/* <User name={"Viswa (function)"} /> */} {/* Functional based component */}
//       <UserClass name={"Viswa (class-based)"} contact="12341" location={"Hyd (class)"} />
//     </div>
//   )
// }


/*
LIFE CYCLE METHODS OF CLASS BASED COMPONENTS

1. constructor() - for initialising state and bind methods
2. render() - to render the jsx (it is a must)
3. componentDidMount() - for api calls, side effects, subscriptions etc.

Phases of component:
1. Mounting - when component is rendered to DOM for the first time
2. Updating - when component is re-rendered due to change in state/props
3. Unmounting - when component is removed from the DOM

Order of execution during Mounting phase:

{RENDER PHASE FOR PARENT}
-Parent - constructor
-Parent - render
    {RENDER PHASE FOR BOTH CHILDREN}
   -First constructor
    -First render
    -Second constructor
    -Second render
 
  <DOM UPDATED - IN SINGLE BATCH>
    {COMMIT PHASE FOR BOTH CHILDREN}
    -First componentDidMount
    -Second componentDidMount
-Parent - componentDidMount

---> First render phase and then commit phase.(So this is Batching Up).
*/

export default About;
