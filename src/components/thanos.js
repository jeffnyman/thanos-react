import React, { Component } from 'react';

import DisplayScreen from './displayScreen';

class Thanos extends Component {
  render() {
    return(
      <DisplayScreen
        displayImage = "/images/thanos.jpg"
        displayMessage = "The universe needs a good cleansing."
        onActivate={ () => alert("Thanos Thanks You") }
        />
    );
  }
}

export default Thanos;
