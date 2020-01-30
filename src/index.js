import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';  
import Spinner from './Spinner';

class App extends React.Component{
    //JS specific function, in a JS class , this constructor function is called every time that the class is created. 
    // so it is the best place to initialize our  react state
  
    state= {lat: null,err:''}
    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat : position.coords.latitude}),
            err => this.setState({err :err.message}));
        

    }

    //React says we have to define render!!
    render(){
        
      if (!this.state.lat && this.state.err) {
          return <div> Error : {this.state.err}</div>
      }
      if (this.state.lat && !this.state.err) {
          return <SeasonDisplay lat={this.state.lat}/>;
      }
      return <Spinner message='Please accept the location request :)' / >
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));
