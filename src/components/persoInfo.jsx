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
        <div className="p-3 border bg-dark text-light">
          <div className="bg-primary p-5 "></div>
          <div className="bg-light d-flex justify-content-between">
              <div className="text-dark">
                <div>
                <h3 className="border-bottom mb-3">Description</h3>
                <div>mqlsdkfjqmlgkqhmldkqfmd qldkfjqm lsdkfjqmlsdkfjqmldskf j</div>
                </div>
                <h3 className="border-bottom text-dark mb-3">Experience</h3>
                <h3 className="border-bottom text-dark mb-3">Education</h3>
              </div>
              <div className="bg-secondary">
                <div className="p-4">img</div>
                <div>personal details
                 <div>adress</div>
                 <div>phone number</div>
                 <div>email</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PersoInfo;
