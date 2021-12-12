// i didnt name it well but i'll do that later, idk now what is its purpose exactly
import React, { Component } from 'react';

class PersoInfo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { personal,education, experience } = this.props;
    return (
      <div>
        <div className="p-3 border bg-dark text-light">
          <div className="bg-primary p-5 "></div>
          <div className="bg-light d-flex justify-content-between">
              <div className="text-dark">
                <div>
                <h3 className="border-bottom mb-3">Description</h3>
                <div>{personal.description}</div>
                </div>
                <h3 className="border-bottom text-dark mb-3">Experience
                </h3>
                <div>{experience.position}</div>
                <div>{experience.company}</div>
                <div>{experience.city}</div>
                <div>{experience.from}</div>
                <div>{experience.to }</div>
                <h3 className="border-bottom text-dark mb-3">Education</h3>
                <div>{education.uni}</div>
                <div>{education.city}</div>
                <div>{education.degree}</div>
                <div>{education.subject}</div>
                <div>{education.from }</div>
                <div>{education.to}</div>

              </div>
              <div className="bg-secondary">
                <div className="p-4">{personal.img}</div>
                <div className="p-2"> personal details : {personal.first} {personal.last}
                 <div>adress : {personal.adress}</div>
                 <div>phone number: {personal.phone}</div>
                 <div>email : {personal.email}</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default PersoInfo;
