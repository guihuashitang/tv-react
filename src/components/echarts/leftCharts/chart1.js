import React from 'react';
import echarts from "echarts";
import './index.css'






class Antv extends React.Component {
  constructor(p) {
    super(p)
    this.state = {
      chart: null,
      chart2: null,
      chart3: null,
      data2: [
        { value: 26.69, name: '中危'},
        { value: 6.20, name: '严重' },
        { value: 12.98, name: '高危' },
        { value: 54.12, name: '低危' },
      ],
    }
  }

  setChart() {
    var xdata = ['北京', '浙江', '广东', '江苏', '上海'], series = [];
    series = [
      {
        name: 'TM_BP',
        type: "bar",
        barWidth: 35,
        data: [24000, 24000, 23000, 18000, 17000],
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#489FFF' },                   //柱图渐变色
              { offset: 0.3, color: '#4087FF' },                 //柱图渐变色
              { offset: 1, color: '#3567FF' },                   //柱图渐变色
            ])
          }
        }
      },
    ];

    var option = {
      title: {
        text: '受攻击省份排名-top5',
        left: 'left',
        textStyle: {
          color: '#fff',
        }
      },
      grid: {
        left: "0%",
        right: "0",
        top: '20%',
        bottom: "0",
        containLabel: true
      },
      xAxis: {
        type: "category",
        data: xdata,
        axisLine: {
          lineStyle: {
            color: '#7E8CC3',
          }
        },
        axisTick: {
          "show": false
        },
      },
      yAxis: {
        splitLine: { show: false },
        type: "value",
        axisLine: {
          lineStyle: {
            color: '#7E8CC3',
          }
        },
        axisTick: {
          "show": false
        },
      },
      series: series
    };
    this.state.chart.setOption(option);
  }

  setChart2() {
    var option = {
      title: {
        text: '安全威胁等级(占比)',
        x: 'left',
        textStyle: {
          color: '#fff',
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          center: ['50%', '55%'],
          radius: ['58%', '70%'],
          avoidLabelOverlap: false,
          data: this.state.data2,
          label: {
            normal: {
              textStyle: {
                color: '#7E8CC3'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#7E8CC3'
              }
            }
          },
          itemStyle: {
            normal: {
              color: function (params) {
                var colorList = [
                  '#F160FF', '#4EB1FF', '#86F9CE', '#4763E3',
                ];
                return colorList[params.dataIndex]
              },
              label: {
                show: true,
                formatter: " {d}% \n {b} ",
                textStyle: {
                  fontSize: 16
                },
              },

            }
          }

        },
      ]
    };
    this.state.chart2.setOption(option);
    this.startLoopMove(option)
  }

  startLoopMove = (option)=>{
    let that = this;
    let idx = 0;
    var data = this.state.data2
    setInterval(() => {
      if(idx!=0){
        data[idx-1]['selected'] = false
      }else{
        data[this.state.data2.length-1]['selected'] = false
      }
      data[idx]['selected'] = true
      that.setState({data2: data})
      that.state.chart2.setOption(option);
      idx++;
      if(idx >= this.state.data2.length){
        idx = 0;
      }
    },2000)
  }

  setChart3() {
    var option = {
      title: {
        text: '漏洞类型(个)',
        textStyle: {
          color: '#fff',
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        show: false,
        splitLine: { show: false },
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#7E8CC3',
          }
        },
        axisTick: {
          "show": false
        },
      },
      yAxis: {
        splitLine: { show: false },
        type: 'category',
        data: ['SQL注入', '敏感信息泄露', '跨站请求伪造（CSRF）', '安全错误配置', '功能级访问控制缺失', '安全错误配置',],
        axisLine: {
          show: false,
          lineStyle: {
            color: '#7E8CC3',
          }
        },
        axisTick: {
          "show": false
        },
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 530230],
          barCategoryGap: 20,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                { offset: 0, color: '#3567FF' },
                { offset: 0.7, color: '#4087FF' },
                { offset: 1, color: '#489FFF' },
               
              ])
            }
          },
          label: {
            normal: {
              show: true,
              position: 'right',
              color: '#fff'
            }
          }
        },
      ]
    };

    this.state.chart3.setOption(option);
  }

  
  componentDidMount() {
    this.state.chart = echarts.init(document.getElementById('chart'));
    this.state.chart2 = echarts.init(document.getElementById('chart2'));
    this.state.chart3 = echarts.init(document.getElementById('chart3'));
    this.setChart()
    this.setChart2()
    this.setChart3()
  }



  render() {
    return (
      <div>
        <div className="chart" id="chart" style={{ width: '378px', height: '199px', marginTop: '15px' }}></div>
        <div id="chart2" style={{ width: '378px', height: '230px', marginTop: '15px' }}></div>
        <div id="chart3" style={{ width: '378px', height: '300px', marginTop: '15px' }}></div>
      </div>
    )
  }
}


export default Antv;
