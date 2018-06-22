import React, { Component } from 'react';
import { connect } from 'react-redux';


import { inc, dec, reset } from './redux/actions';

class App extends Component {
  onIncrementHandler = () => {
    this.props.inc();
  }
  onDecrementHandler = () => {
    this.props.dec();
  }
  onResetHandler = () => {
    this.props.reset();
  }

  render() {
    return (
      <div className="App">
        <p>
          The value of counter is: {this.props.counter.value}
        </p>

        <input type="button" value="Increment" onClick={this.onIncrementHandler} />
        <input type="button" value="Decrement" onClick={this.onDecrementHandler} />
        <input type="button" value="Reset" onClick={this.onResetHandler} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counterReducer,
})

const mapDispatchToProps = {
  inc,
  dec,
  reset,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
