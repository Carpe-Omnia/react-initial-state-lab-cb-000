import React from 'react' ;

export default class ImageSlider extends React.Component {
  constructor(props) {
    super() ;
    this.State = {
      currentSlideIndex: 0
    }
  }
  render() {
    return (
      <div>
        `I am on slide ${this.state.currentSlideIndex}`
      </div>
    )
  }
}
