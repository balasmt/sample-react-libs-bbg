import React, { Component } from 'react';
import PropTypes from "prop-types";
// export {ColorHeadingOne, ColorHeadingTwo }
export class ColorHeadingOne extends Component{
  static propTypes=
  {
    text: PropTypes.string,
    color: PropTypes.string
  };
  render(){
    const {text,color}=this.props;
    return <h1 style={{color}}>{text}</h1>;
  }
}
export class ColorHeadingTwo extends Component{
  static propTypes=
  {
    text: PropTypes.string,
    color: PropTypes.string
  };
  render(){
    const {text,color}=this.props;
    return <h2 style={{color}}>{text}</h2>;
  }
}