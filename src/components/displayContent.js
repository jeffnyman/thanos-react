import React, { Component } from 'react';

class DisplayContent extends Component {
  render() {
    const {
      style,
      children
    } = this.props;

    return(
      <div style={{
        color: "yellow",
        ...style
      }}>
        { children }
      </div>
    );
  }
}

export default DisplayContent;
