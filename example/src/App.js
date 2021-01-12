import React,{ Component} from 'react';
import { ColorHeadingOne }  from 'color-heading';
import { ColorHeadingTwo }  from 'color-heading';
export default class App extends Component{
  render(){
    return(
      <div>
        <ColorHeadingOne text="colored heading one is working" color={"red"}/>
        <ColorHeadingTwo text="colored heading two is working" color={"blue"}/>
      </div>
    );
  }
}
