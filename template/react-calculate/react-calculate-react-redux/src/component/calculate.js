import React from 'react'
import Action from '../action/action'
import { connect } from 'react-redux'

class Calculate extends React.Component {
  increase = () => {
    this.props.increase()
  }
  decrease = () => {
    this.props.decrease()
  }
  render() {
    return(
      <div>
        <h1>{this.props.count}</h1>
        <div>
          <button type="button" onClick={this.increase}>Increase</button>
          <button type="button" onClick={this.decrease}>Decrease</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps, Action)(Calculate)