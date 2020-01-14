import React from "react";
import './head.css';
import { Layout,Button } from "antd";


const { Header } = Layout;

class FullScree extends React.Component{
  constructor(p) {
    super(p)
    this.state={
      isFull: false
    }
  }

  componentDidMount() {
    console.log(this.props)
  }


  handClick = () => {
    // document.documentElement.requestFullscreen() 
    let fullarea = document.getElementById('dropable')
    fullarea.requestFullscreen() 
  };

  render() {
    return (
      <Header className="header">
        <Button onClick={this.handClick}>全屏</Button>
      </Header>
    );
  }
}

export default FullScree;