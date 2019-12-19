import React from 'react';
import './table.css'





class Table extends React.Component {
  constructor(p) {
    super(p)
    this.state = {
    }
  }

  componentDidMount() {
  
  }



  render() {
    let data = [
      {time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},
      {time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},
      {time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},
      {time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},{time: '2019-1-20', ip: '192.168.0.0',value: '125.0005041'},
    ]
    return (
      <div style={{width: '400px',height: '729px',background: 'rgba(36,43,117,.7)',color: '#fff'}}>
        <div className="detailtitle">实时详情</div>
        <div className="tableHead">
          <span>时间</span>
          <span>归属ip</span>
          <span>流量</span>
        </div>
        <div className="tablebody">
          {data.map((ele,i)=>{
            return (
              <div key={i}>
                <span>{ele.time}</span>
                <span>{ele.ip}</span>
                <span>{ele.value}</span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}


export default Table;
