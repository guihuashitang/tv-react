import React from 'react';
import HeadCommons from '../commons/headTv/index.js';
import Chart1 from './leftCharts/chart1.js';
import Map from './map/index.js';
import './echarts.css'
import Table from './table/index.js';




class Echarts extends React.Component{
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
        <div className="charts">
          <Chart1></Chart1>
          <Map></Map>
          <Table></Table>
        </div>
      </div>
    )
  }
}


export default Echarts;
