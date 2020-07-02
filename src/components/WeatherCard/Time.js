import React, {Component}  from 'react';
import "./Clock.css"

class Time extends Component{

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
    let currMinutes = new Date().getMinutes();
    const currHour = new Date().getHours();

      //set minutes based on time zone. :00 or :30
      if(this.props.timeZone%3600===0){
        currMinutes= new Date().getMinutes();
      } else {
        if(new Date().getMinutes() > 29)
        currMinutes= new Date().getMinutes()-30;
        else
        currMinutes= new Date().getMinutes()+30;
      }
   
   
      if(currMinutes<10)
        this.setState({minutes: ":0" + currMinutes})
      else 
        this.setState({minutes: ":" +currMinutes})
      

        let timeDiff = 0;
        switch(this.props.timeZone){
          case 32400: //Japan Time
              if(currHour >= 0 && currHour < 8)
                timeDiff = 16
              else 
                timeDiff = -8
              break;
          case 28800: //Beijing Time
              if(currHour >= 0 && currHour < 9)
                timeDiff = 15
              else 
                timeDiff = -9
              break;
          case 19800: //Mumbai Time
              if(currHour >=0 && currHour < 12 && new Date().getMinutes()<30)
                timeDiff = 12;
              else if(currHour >=0 && currHour < 11 && new Date().getMinutes()>=30)
                timeDiff = 13;
              else if(currHour >=12 && currHour < 24 && new Date().getMinutes()<30)
                timeDiff=-12;
                else if(currHour >=11 && currHour < 24 && new Date().getMinutes()>=30)
                timeDiff=-11;
              break;
          case 3600: //London Time
              if(currHour >= 0 && currHour < 16)
              timeDiff = 8
              else 
               timeDiff= -16
              break;
          case -14400: //(US/Eastern)
              if(currHour >= 0 && currHour < 21)
              timeDiff = 3
              else 
              timeDiff=-21
              break;
          case -18000: //(US/Central)
              if(currHour >= 0 && currHour < 22)
              timeDiff = 2
              else 
               timeDiff= -22
              break;
          case -21600: //(US/Mountain)
              if(currHour >= 0 && currHour < 23)
                timeDiff = 1
              else 
                timeDiff = 0
              break;
          case -36000: //Hawaii
              if(currHour >= 0 && currHour < 3)
                timeDiff = 21
              else 
                timeDiff = -3
              break;
          case -25200: //(US/Pacific)
              timeDiff = 0   
              break;
          default://Default
              timeDiff=0;
            break;
        }
      
      if(currHour+timeDiff>12 && currHour<24)
        this.setState({hours: currHour+timeDiff-12})
      else if(currHour+timeDiff===0)
        this.setState({hours: 12})
      else
        this.setState({hours: currHour+timeDiff})

      
      if(currHour+timeDiff>=0 && currHour+timeDiff< 12)
      this.setState({seconds: currSeconds+" am"})
      else
      this.setState({seconds: currSeconds+" pm"})
    }

     componentDidMount(){
        setInterval(()=>this.currentTime(),1000)
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
