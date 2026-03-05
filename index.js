import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  toggleFirstName = () => {
    this.setState(prevState => ({
      showFirstName: !prevState.showFirstName,
    }))
  }

  toggleLastName = () => {
    this.setState(prevState => ({
      showLastName: !prevState.showLastName,
    }))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="background">
        <h1 className="head">Show/Hide</h1>

        <div className="btn-cont">
          <button className="btn" onClick={this.toggleFirstName} type="button">
            Show/Hide Firstname
          </button>

          {showFirstName && (
            <div className="sub-cont">
              <p>Joe</p>
            </div>
          )}

          <button className="btn" onClick={this.toggleLastName} type="button">
            Show/Hide Lastname
          </button>

          {showLastName && (
            <div className="sub-cont">
              <p>Jonas</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default ShowHide
