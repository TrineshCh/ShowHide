// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {isClick: true}
  onClick = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }
  render() {
    const {isClick} = this.state
    return (
      <div className="background">
        <h1 className="head">Show/Hide</h1>
        <div className="btn-cont">
          <button className="btn" onClick={this.onClick} type="button">
            Show/Hide Firstname
          </button>
          {isClick ? (
            <div className="sub-cont">
              <p>Joe</p>
            </div>
          ) : null}
          ;
          <button className="btn" onClick={this.onClick} type="button">
            Show/Hide Lastname
          </button>
          {isClick ? (
            <div className="sub-cont">
              <p>Jonas</p>
            </div>
          ) : null}
          ;
        </div>
      </div>
    )
  }
}
export default ShowHide
