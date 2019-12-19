import React from 'react';
import G2 from '@antv/g2';


class Chart1 extends React.Component{
  constructor(p) {
    super(p)
    this.state={
    
    }
  }


  creatChart=()=>{
    const data = [
      { city: '北京', value: 29999 },
      { city: '浙江', value: 30000 },
      { city: '广东', value: 30000 },
      { city: '江苏', value: 18000 },
      { city: '上海', value: 17000 },
    ];
    const chart = new G2.Chart({
      container: 'c1',
      forceFit: true,//当需要图表跟随图表容器宽度变化时，则需要开启 forceFit 属性
      height: 250,
      animate: true
    });
    chart.source(data);//载入数据
    chart.tooltip(false);
    
    chart
    .interval()
    .position('city*value')
    chart.render();
  }
  

  componentDidMount() { 
    this.creatChart()
  }

 

  render() {

    return(
      <div id="c1" style={{width: '370px',height: '205px'}}>
       
      </div>
    )
  }
}


export default Chart1;
