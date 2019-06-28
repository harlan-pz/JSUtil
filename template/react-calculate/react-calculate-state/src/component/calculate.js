import React from 'react'

class Calculate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    }
  }
  increase = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrease = () => {
    this.setState({
      count: this.state.count - 1
    })
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