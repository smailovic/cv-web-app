// i didnt name it well but i'll do that later, idk now what is its purpose exactly
import React,{Component} from 'react';

class PersoInfo extends Component {
  constructor(props){
    super(props);

  }
  render(){
    //up unttil now i made an error of controled components read on that later
    //and fix this
    return(
      <h1>{this.props.text}</h1>
    );
  }
}
export default PersoInfo;