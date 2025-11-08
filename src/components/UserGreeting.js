import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // METHOD-4
    return this.state.isLoggedIn && <div>Welcome Vishwas</div>

    // METHOD-3
    // return this.state.isLoggedIn ? ( <div> Welcome Vishwas</div>) : (<div>Welcome Guest</div>)

    // METHOD-2
    // let message
    // if (this.state.isLoggedIn){
    //     message = <div>Welcome Vishwas</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return message;

    // METHOD-1
    // if(this.state.isLoggedIn) {
    //     return <div>Welcome Vishwas</div>
    // } else {
    //     return <div>Welcome Guest</div>
    // }

    return (
      <div>
        <div>Welcome Guest</div>
        <div>Welcome Vishwas</div>
      </div>
    );
  }
}
export default UserGreeting;
