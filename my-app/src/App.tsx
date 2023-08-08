import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { type } from 'os';
import { string } from 'prop-types';
import { render } from '@testing-library/react';
interface IProps {
  name: string;
  age: number;
}
class Counter extends React.Component<any,any>{
  constructor(prop: IProps) {
      console.log(prop.name);
      super(prop);
      this.state = {clickCount: 0};
      this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(function(state: any, props: any) {
      return {clickCount: state.clickCount + 1};
    });
  }
  render () {
    return (<h2 onClick={this.handleClick}>点我！点击次数为: {this.state.clickCount}</h2>);
  }
}
export default Counter;
