import React,{Component} from 'react';
import { connect } from "react-redux";
import { GetCountValue, IncCountValue, DecCountValue } from '../redux/actions';

class Counter extends Component{
    constructor(props){
      super(props);
      this.incrementHandler = this.incrementHandler.bind(this);
      this.decrementHandler = this.decrementHandler.bind(this);
    }

    incrementHandler(){
        this.props.dispatch(IncCountValue());
    }

    decrementHandler(){
        this.props.dispatch(DecCountValue());
    }

    // incrementHandler=()=>{
    //     this.props.dispatch(IncCountValue());
    // }

    // decrementHandler=()=>{
    //     this.props.dispatch(DecCountValue()); 
    // } 

    render(){
        const { count } = this.props;
        return(
            <div>
                <h4>Count :: {count}</h4>
                <button onClick={this.incrementHandler} >Increment</button> &nbsp;&nbsp;
                <button onClick={this.decrementHandler}>Decrement</button>
            </div>
        )
    }
}

// const mapStateToProps = (state) =>  {
//     console.log(state);
//     return({
//         count:state.count
//     })
//   }

function mapStateToProps(state) {
    console.log("mapStateToProps :: "+JSON.stringify(state));
    const { count } = state
    return {
      count
    }
  }
  
export default connect(mapStateToProps)(Counter);