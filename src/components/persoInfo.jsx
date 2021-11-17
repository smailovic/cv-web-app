// i didnt name it well but i'll do that later, idk now what is its purpose exactly
import React, { Component } from 'react';

class PersoInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { personal } = this.props;
    return (
      <div>
        <h1 className="p-3 border bg-dark text-light container">
          {personal.first}
        </h1>
      </div>
    );
  }
}
export default PersoInfo;
