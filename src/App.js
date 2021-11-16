import React, { Component } from 'react';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersoInfo from './components/persoInfo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",

    }
  }
  handleChange = (e)=>{
    this.setState({
      text: e.target.value,
    })
    
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    this.setState({
      text: this.state.value
    });
  

  }
  render() {
    const {text} = this.state;
    return (
      <section className="bg-light">
        <header>
          <div className="bg-dark p-5 ">
            <h1 className="text-warning text-center border-end border-start">
              CV Maker
            </h1>
          </div>
        </header>
        <form className="container mt-2">
          <section className="bg-light border border-light border-2 form-group">
            <h1>Personal Information</h1>
            <div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="first name"
                  value={text}
                  onChange={this.handleChange}
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="last name"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="title"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="photo"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Adress"
                />
              </div>

              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Phone number"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email"
                />
              </div>
              <div className="m-2">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Description"
                />
              </div>
            </div>

            <h1>Education</h1>
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

            <h1>Experience</h1>
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
            <div onClick={this.handleSubmit} className="bg-success text-center p-2 m-2 rounded">
              Generate PDF
            </div>
            <div className="bg-danger text-center p-2 m-2 rounded">
              Load Example
            </div>
            <div className="bg-info text-center p-2 m-2 rounded">Reset</div>
          </section>
        </form>
        <PersoInfo name={text}/>
      </section>
    );
  }
}
export default App;
