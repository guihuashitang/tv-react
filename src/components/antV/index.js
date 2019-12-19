import React from 'react';
import './antV.css';
import HeadCommons from '../commons/headTv/index.js';
import Chart1 from './charts/chart1.js';






class Antv extends React.Component{
  constructor(p) {
    super(p)
    this.state={
    
    }
  }

  translateText=async() => {
 
  }



  componentDidMount() {
    // this.creatChart()
  }

 

  render() {

    return(
      <div className="container">
        <HeadCommons></HeadCommons>
        <Chart1></Chart1>
      </div>
    )
  }
}


export default Antv;
