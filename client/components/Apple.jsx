import React from 'react'
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
let theobj = "none"

class Apple extends React.Component {
  state = {
    level: 0,
    y: -(Math.floor(Math.random()*screen.height)),
    x: Math.floor(Math.random()*(screen.width - 100)),
    style: {
      top: "-100px",
      left: "0px"
    }
  }


  componentDidMount() {
    this.interval = setInterval(() => { 
      if(this.state.y < (window.innerHeight - document.getElementById("bottom").clientHeight)) {
       
        this.setState({
          style : {
              ...this.state.style, top: this.state.y, left: this.state.x
          },
          y: this.state.y + 5
        }) 
      
      }
      else {
        setTimeout(this.rottEvent, 1000);
      }
    
     }, 40);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  colectEvent = (e) => {
    this.props.addscore()
    this.setState({
     x: Math.floor(Math.random()*screen.width),
     y: -100
    })
  }
  rottEvent = (e) => {
    this.setState({
      x: Math.floor(Math.random()*screen.width),
      y: -100
     })
  }

  render() {
    return (
      <div className="fruit" id="test" style={this.state.style} onMouseEnter={this.colectEvent}>

      </div>
    )
  }

}

export default Apple