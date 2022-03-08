import React, { Component } from "react";
import { LocaleContext } from "../../LocaleContext.js";


class User extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      user:{}
    };
  }

  render() {
    return (
      <UserContext.Consumer>
        {value => langs[value][string]}
      </UserContext.Consumer>
    );
  }

}

export default Translate;