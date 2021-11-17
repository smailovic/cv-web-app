import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersoInfo from './components/persoInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        first: '',
        last: '',
        title: '',
        photo: '',
        adress: '',
        phone: '',
        email: '',
        description: '',
      },
      education : {
        uni:'',city:'',degree:'',subject:'',from:0,to:0
      },
      experience : {
        position:'',
        company:'',
        city:'',
        from:'',
        to:''
      }
    };
  }
  handleChange = (e) => {
    this.setState({
      personal: { ...this.state.personal, [e.target.name]: e.target.value },
      education: { ...this.state.education, [e.target.name]: e.target.value },
      experience: { ...this.state.exper, [e.target.name]: e.target.value },
    });
    console.log(this.state.personal);
  };
  handleSubmit = (e) => {
    const { personal } = this.state;
    e.preventDefault();
    alert(`
    first name =${personal.first}
    last name = ${personal.last}
    title = ${personal.title}
    photo = ${personal.photo}
    adress = ${personal.adress}
    phone = ${personal.phone}
    email = ${personal.email}
    description = ${personal.description}

    `);
  };
  render() {
    const { personal } = this.state;
    return (
      <section className="bg-light">
        <header>
          <div className="bg-dark p-5 ">
            <h1 className="text-warning text-center border-end border-start">
              CV Maker
            </h1>
          </div>
        </header>
        <form onSubmit={this.handleSubmit} className="container mt-2">
          <section className="bg-light border border-light border-2 form-group">
            <h1>Personal Information</h1>
            <div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="first name"
                  value={personal.first}
                  onChange={this.handleChange}
                  name="first"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="last name"
                  onChange={this.handleChange}
                  value={personal.last}
                  name="last"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="title"
                  value={personal.title}
                  onChange={this.handleChange}
                  name="title"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="photo"
                  value={personal.photo}
                  onChange={this.handleChange}
                  name="photo"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Adress"
                  value={personal.adress}
                  onChange={this.handleChange}
                  name="adress"
                />
              </div>

              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone number"
                  value={personal.phone}
                  onChange={this.handleChange}
                  name="phone"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                  value={personal.email}
                  onChange={this.handleChange}
                  name="email"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                  value={personal.description}
                  onChange={this.handleChange}
                  name="description"
                />
              </div>
            </div>

            <h1>Education</h1>
            <div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="University name"
                />
              </div>
              <div className="m-2">
                <input className="form-control" type="text" placeholder="city" />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Degree"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="subject"
                />
              </div>
              <div className="m-2">
                <input className="form-control" type="text" placeholder="from" />
              </div>
              <div className="m-2">
                <input className="form-control" type="text" placeholder="to" />
              </div>
              <div className="m-2 bg-dark text-light text-center p-2 mb-2 rounded">
                delete
              </div>
              <div className="m-2 bg-dark text-light text-center p-2 rounded">
                Add
              </div>
            </div>
            

            <h1>Experience</h1>
            <div>
                <div className="m-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Postition"
                  />
                </div>
                <div className="m-2">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Company"
                  />
                </div>
                <div className="m-2">
                  <input className="form-control" type="text" placeholder="City" />
                </div>
                <div className="m-2">
                  <input className="form-control" type="text" placeholder="From" />
                </div>
                <div className="m-2">
                  <input className="form-control" type="text" placeholder="To" />
                </div>
                <div className="bg-dark text-light text-center p-2 m-2 rounded">
                  delete
                </div>
                <div className="bg-dark text-light text-center p-2 m-2 rounded">
                  Add
                </div>
            </div>
            <div className="container ms-0">
              <button
                type="submit"
                className="form-control bg-success text-center p-2  rounded"
              >
                Generate PDF
              </button>
            </div>
            <div className="bg-danger text-center p-2 m-2 rounded">
              Load Example
            </div>
            <div className="bg-info text-center p-2 m-2 rounded">Reset</div>
          </section>
        </form>
        <PersoInfo personal={personal} />
      </section>
    );
  }
}
export default App;
