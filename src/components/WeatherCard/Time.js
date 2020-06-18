import React, {Component}  from 'react';
import "./Clock.css"

class Time extends Component{
  _isMounted = false;

  constructor(props){
    super(props);
    this.state={
      timeZone:this.props.timeZone,
      hours: null,
      minutes: "Loading...",
      seconds: null
    }
  }

  currentTime(){
    const currSeconds = new Date().getSeconds();
    const currMinutes = new Date().getMinutes();
    const currHours = new Date().getHours();
   
      if(currMinutes<10)
        this.setState({minutes: ":0" + currMinutes})
      else 
        this.setState({minutes: ":" +currMinutes})
      

      let timeDiff = 0;
      const time = new Date().getHours();

      switch(this.props.timeZone){
        case 32400: //Japan Time
            if(time >= 0 && time < 8)
              timeDiff = 16
            else 
              timeDiff = -8
            break;
        case -21600: //(US/Mountain)
            if(time >= 0 && time < 23)
              timeDiff = 1
            else 
              timeDiff = 0
            break;
        case -14400: //(US/Eastern)
            if(time >= 0 && time < 21)
            timeDiff = 3
            else 
            timeDiff=-21
            break;
        case -18000: //(US/Central)
            if(time >= 0 && time < 22)
            timeDiff = 2
            else 
             timeDiff= -22
            break;
        default://(US/Pacific)
            timeDiff=0;
          break;
      }
      
      if(currHours+timeDiff>12 && currHours<24)
      this.setState({hours: new Date().getHours()+timeDiff-12})
      else
      this.setState({hours: new Date().getHours()+timeDiff})

      
      if(currHours+timeDiff>=0 && currHours+timeDiff< 12)
      this.setState({seconds: currSeconds+" am"})
      else
      this.setState({seconds: currSeconds+" pm"})
    }

     componentDidMount(){
      this._isMounted = true;

      if(this._isMounted)
        setInterval(()=>this.currentTime(),1000)
  
      }
    componentWillUnmount() {
      this._isMounted = false;
    }

   render(){
      return(
        <div className="App-clock">
          <div>
          {this.state.hours}{this.state.minutes}
          </div>
          <div className="seconds">
          {this.state.seconds}
          </div>
        </div>
      );
   }
  }

  export default Time

