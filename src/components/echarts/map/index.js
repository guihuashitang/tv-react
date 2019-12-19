import React from 'react';
import echarts from "echarts";
import '../../../../node_modules/echarts/map/js/world.js'
import './map.css'




class Map extends React.Component {
  constructor(p) {
    super(p)
    this.state = {
      mapChart: null,
      mapData: [
        {
          centerCity: '上海',
          toCity: ['纽约','伦敦','莫斯科','东京','堪培拉'],
        },
        {
          centerCity: '纽约',
          toCity: ['伦敦','渥太华','莫斯科'],
        },
      ],
      coordMap: {
        '上海': [121.4648, 31.2891],
        '纽约': [-74.0059731,40.7143528],
        '伦敦': [0, 52],
        '莫斯科': [37.35,55.45],
        '东京': [139.44,35.41],
        '渥太华': [-75.43,45.25],
        '堪培拉': [149.07,-35.17],
      }
    }
  }

  lineData = ()=>{
    let data = []
    this.state.mapData.forEach((ele,index)=>{
      ele.toCity.forEach(city=>{
        data.push([this.state.coordMap[ele.centerCity],this.state.coordMap[city]],)
      })
    })
    return data
  }

  effectData = ()=>{
    let data = []
    this.state.mapData.forEach((ele,index)=>{
      ele.toCity.forEach(city=>{
        data.push(this.state.coordMap[ele.centerCity],this.state.coordMap[city])
      })
    })
    return Array.from(new Set(data))
  }

  setChart() {
    var linesData = this.lineData()
    var effectData = this.effectData() 
    console.log(effectData)
    var option = {
      geo: {
        show: true,
        map:'world',
        roam: false,
        layoutCenter: ['50%','50%'],
        layoutSize: 900,
        label: {
          normal: {show: false},
          emphasis: {show: false}
        },
        itemStyle: {
          borderColor : '#3B72D5',
          areaColor: '#2A359E',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            borderColor : '#3B72D5',
            areaColor: '#2A359E',
          }
        },
      },
      series: [
        {
          type: 'lines',
          zlevel: 1,
          symbolSize: 20,
          effect: {
            show: true,
            period: 4, //箭头指向速度，值越小速度越快
            trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
            symbol: 'arrow', //箭头图标
            symbolSize: 6, //图标大小
          },
          lineStyle: {
            color: '#F4B110',
            width: 1,
            shadowBlur: {
              shadowColor: '#F4B110',
              shadowBlur: 10
            },
            curveness: 0.2
          },
          data: linesData,
        },
        {
          type: 'effectScatter',
          zlevel: 2,
          coordinateSystem: 'geo',
          rippleEffect: { //涟漪特效
            period: 4, //动画时间，值越小速度越快
            brushType: 'stroke', //波纹绘制方式 stroke, fill
            scale: 4 //波纹圆环最大限制，值越大波纹越大
          },
          itemStyle: {
            color: '#F4B110',
          },
          symbol: 'circle',
          data: effectData
        }
      ],
    };
    this.state.mapChart.setOption(option);
  }
  
  componentDidMount() {
    this.state.mapChart = echarts.init(document.getElementById('mapChart'));
    this.setChart()
    
 
  }



  render() {
    return (
      <div className="mapChart" id="mapChart"></div>
    )
  }
}


export default Map;
