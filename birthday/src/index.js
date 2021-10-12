import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Setup from "./Setup";
import Title from './Title';
const Compile = () => {
  return (
    <>
    <Title/>
      <Setup/>
    </>
  )
}
ReactDOM.render(<Compile/>,document.getElementById("root"))
