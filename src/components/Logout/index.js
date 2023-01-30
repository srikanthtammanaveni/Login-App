// Write your code here
import {Component} from 'react'

import './index.css'

class Home extends Component {
  state = {isLogin: true}

  loggedState = () => {
    this.setState(prevState => ({isLogin: !prevState.isLogin}))
  }

  render() {
    const {isLogin} = this.state

    const buttonText = isLogin ? 'Login' : 'Logout'

    const text = isLogin ? 'Welcome User' : 'Please Login'

    return (
      <div className="container">
        <div className="content-container">
          <h1 className="welcome">{text}</h1>
          <button className="btn" type="button" onClick={this.loggedState}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}
export default Home
