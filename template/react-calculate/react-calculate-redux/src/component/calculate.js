import React from 'react'
import store from '../store/store'
import { increase, decrease } from '../action/action'

class Calculate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: store.getState().count
    }
  }
  componentDidMount() {
    store.subscribe(this.updateState)
  }
  updateState = () => {
    this.setState({
      count: store.getState().count
    })
  }
  increase = () => {
    store.dispatch(increase())
  }
  decrease = () => {
    store.dispatch(decrease())
  }
  render() {
    return(
      <div>
        <h1>{this.state.count}</h1>
        <div>
          <button type="button" onClick={this.increase}>Increase</button>
          <button type="button" onClick={this.decrease}>Decrease</button>
        </div>
      </div>
    )
  }
}

export default Calculate