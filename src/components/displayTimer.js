import React, { Component } from 'react';

class DisplayTimer extends Component {
  state = {
    now: new Date()
  }

  updateTime = () => {
    this.setState({ now: new Date() });
  }

  componentDidMount() {
    this.updateInterval = setInterval(this.updateTime, 500);
  }

  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    const { now } = this.state;

    return (
      <div className="timer" style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        { now.toLocaleTimeString('en-US', {timeZone: 'UTC', timeZoneName: 'short', hour12: false }) }
      </div>
    );
  }
}

export default DisplayTimer;
