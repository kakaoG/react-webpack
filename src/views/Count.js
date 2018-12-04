import React, {Component} from 'react';
import { connect } from 'react-redux';
import {addNum} from '../redux/actions/count'

class Count extends Component {
  constructor(props) {
    super(props);
  }

  handleNum(data) {
    console.log(data)
    this.props.dispatch(addNum(data))
  }

  render() {
    return (
      <div className='count'>
        <h4>Count</h4>
        <button onClick={() => this.handleNum(1)}>+</button>
        <input value={this.props.Count} readOnly={true} type="text"/>
        <button onClick={() => this.handleNum(-1)}>-</button>
        <footer>2322</footer>
      </div>
    )
  }
}


function mapState(state) {
  return {
    Count: state.count
  }
}

export default connect(mapState)(Count);