import { Component } from "react"

class ClsComp extends Component {                     // Extended from base component, Follow PascalCasing to name the component to render it 
  render() {                                          // Must be defined to render in DOM  
    return <p>Hi! I am a class Component</p>;
  }
}

export default ClsComp // To enable import in another component
