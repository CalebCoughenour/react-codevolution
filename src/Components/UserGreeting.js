import React, { Component } from 'react'

class UserGreeting extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: false
    }
  }
  render() {

    // short circuit operator - this one shows nothing or the message
    // return this.state.isLoggedIn && <div>Welcome Caleb</div>

    return this.state.isLoggedIn ? (
      <div>Welcome Caleb</div>
       ) : (
      <div>Welcome Guest</div>
    )


    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Caleb</div>
    // } else {
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       Welcome Caleb!
    //     </div>
    //   )
    // } else {
    //   return (
    //     <div>
    //       <div>
    //         Welcome Guest
    //       </div>
    //     </div>
    //   )
    // }
  }
}

export default UserGreeting