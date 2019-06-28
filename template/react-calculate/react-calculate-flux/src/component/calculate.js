import React from 'react'
import Store from '../store/store'
import Action from '../action/action'
class Calculate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  componentDidMount() {
    Store.addDecreaseListener(this.updateState)
    Store.addIncreaseListener(this.updateState)
  }
  updateState = () => {
    this.setState({
      count: Store.getStore().count
    })
  }
  increase = () => {
    Action.increase()
  }
  decrease = () => {
    Action.decrease()
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