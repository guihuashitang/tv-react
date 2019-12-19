import React from 'react';
import './head.scss';
import CountTo from 'react-count-to';


class HeadCommons extends React.Component{
  constructor(p) {
    super(p)
    this.state={
    
    }
  }

  componentDidMount() {
  }

 

  render() {

    return(
      <div>
        <div className="editor-wrap">
          <div className="leftLine">
            <div className="bar-top"></div>
            <div className="bar-bottom"></div>
          </div>
          <font style={{fontSize: '35px',color: '#fff',}} >盾·网络安全</font>
          <div className="rightLine">
            <div className="bar-top"></div>
            <div className="bar-bottom"></div>
          </div>
        </div>
        <div className="clock">
          <font color="#3ec7ff" size="4">网络安全风险感知</font>
          <font color="#3ec7ff" size="4">2019年12月3日 15时56分14秒</font>
        </div>
        <div className="cardData">
          <div className="cardBox">
            <div className="boxTitle">总攻击数</div>
            <div className="boxNum"><CountTo from={0} to={5329703006} speed={1234} digits={0}/></div>
          </div>
          <div className="cardBox">
            <div className="boxTitle">扫描发现总漏洞数</div>
            <div className="boxNum"><CountTo from={0} to={528230107} speed={1234} digits={0}/></div>
          </div>
          <div className="cardBox">
            <div className="boxTitle">扫描发现总漏洞数</div>
            <div className="boxNum"><CountTo from={0} to={5328951758} speed={1234} digits={0}/></div>
          </div>
          <div className="cardBox">
            <div className="boxTitle">今日攻击带宽峰值</div>
            <div className="boxNum"><CountTo from={0} to={249.98} speed={1234} digits={2}/></div>
          </div>
          <div className="cardBox">
            <div className="boxTitle">保护资产个数</div>
            <div className="boxNum"><CountTo from={0} to={5328951758} speed={1234} digits={0}/></div>
          </div>
        </div>
      </div>
    )
  }
}


export default HeadCommons;
