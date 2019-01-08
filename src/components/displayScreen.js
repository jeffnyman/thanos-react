import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DisplayTimer from './displayTimer';
import DisplayContent from './displayContent';
import DisplayActivate from './displayActivate';

class DisplayScreen extends Component {
  render() {
    const {
      displayImage,
      displayMessage,
      onActivate,
    } = this.props;

    return (
      <div className="core" style={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        backgroundColor: "black",
        backgroundImage: displayImage ? `url(${displayImage})` : "",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}>
        <DisplayTimer />

        { displayMessage ? (
          <DisplayContent style={{padding: "5.6em", marginBottom: "auto"}}>
            { displayMessage }
          </DisplayContent>
        ) : "Thanos Compels You" }

        <DisplayActivate onSlide={onActivate} />
      </div>
    );
  }
}

DisplayScreen.propTypes = {
  displayImage : PropTypes.string,
  displayMessage : PropTypes.string,
  onActivate : PropTypes.func
}

export default DisplayScreen;
