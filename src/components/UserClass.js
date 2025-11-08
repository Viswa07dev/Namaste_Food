import React from "react";

class UserClass extends React.Component {

  constructor(props){
    super(props);
    // console.log(props);

    this.state = {
      count :0,
      count2:1,
      userInfo:{
        name:"",
        location:"",
      }
    };
   console.log(this.props.name+"Child - constructor");
  }
  
  async componentDidMount(){
    console.log(this.props.name+"Child - componentDidMount");

    // Api calls
    const data = await fetch("https://api.github.com/users/viswa");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    })
  }

//  it is called when the component is updated (re-rendered)
  componentDidUpdate(){
    console.log(this.props.name+"Child - componentDidUpdate");
  }

   // it is called when the component is removed from the DOM
componentWillUnmount(){
    console.log(this.props.name+"Child - componentWillUnmount");
}

  render(){
     const {name,location,contact} = this.props;
     const {count,count2} = this.state
     console.log(this.props.name+"Child - render");
    return(
      <div className="user-card">
      <h1>{count}</h1>
      <button onClick={()=>{
        this.setState({
          count: this.state.count+1,
          count2:this.state.count2-1
        })
      }}>Count Increase/Decrease</button>
      <h1>{count2}</h1>
      <h1>{this.state.userInfo.name}</h1>
      <h2>{this.state.userInfo.location}</h2>
      <img src={this.state.userInfo.avatar_url} />
      <h2>{this.state.userInfo.bio}</h2>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: {contact}</h4>
    </div>
    )
  }
}

export default UserClass;

/*
 ---MOUNTING
   1.constructor(dummy data)
    2.render(with dummy data)
           <-- HTML dummy data -->
    3.componentDidMount() (api calls)
       API CALL
       <-- this.setState() -->
       4.render(with api data)
           <-- HTML with api data -->

---UPDATE CYCLE
---Updating (setState/props changes)
   1.render(api data)
       <HTML IS LOADED (New Api Data)>
       <-- updated HTML -->
    2.componentDidUpdate()
this is how whole life cycle method works

---Unmounting
   componentWillUnmount()
   (used for cleanup, removing listeners, cancelling subscriptions etc.)
*/