import React from 'react'
import  * as action from './actions/action'
import { connect } from 'react-redux'
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        <button type="button" onClick={() => this.props.increase(2)}>increase</button>
        <button type="button" onClick={() => this.props.decrease(3)}>decrease</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    count: state
  }
}
export default connect(mapStateToProps, action)(App)
