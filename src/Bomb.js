import React from 'react' ;

export default class Bomb extends React.Component {
  constructor(props) {
    super() ;
    this.State = {
      secondsLeft: this.props.initialCount
    }
  }
  render() {
    if (this.state.secondsLeft == 0 ) { return (
      <div>
        Boom!
      </div>
    ) }
    else {
      return (
        <div>
          `${this.state.secondsLeft} seconds left before I go boom!`
        </div>
      )
    }
  }
}
