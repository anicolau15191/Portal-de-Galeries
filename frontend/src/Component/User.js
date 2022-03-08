import React, { Component } from "react";
import { LocaleContext } from "../../LocaleContext.js";


class Translate extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      langs: {
        es,
        ca
      }
    };
  }

  render() {
      const {langs} = this.state 
      const {string} = this.props
    return (
      <LocaleContext.Consumer>
        {value => langs[value][string]}
      </LocaleContext.Consumer>
    );
  }

}

export default Translate;