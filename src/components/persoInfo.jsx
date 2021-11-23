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
        <div className="p-3 border bg-dark text-light container">
          <h1 className="text-warning">first name : {personal.first}</h1>
          <h1 className="text-warning">last name : draoui</h1>
          <h1 className="text-warning">title : software dev</h1>
          <h1 className="text-warning">Adress : sdmflkqjsdf</h1>
          <h1 className="text-warning">Email : smaelcv@gmail.com</h1>
        </div>
      </div>
    );
  }
}
export default PersoInfo;
