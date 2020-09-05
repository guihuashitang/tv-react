import React from 'react';
import debounce from './utils/debounce.js'
import './App.css';
import FullScree from './components/header'
import { Layout } from "antd";
import Echarts from './components/echarts'



const { Content } = Layout;

class App extends React.Component{
  constructor(p) {
    super(p)
    this.state={
      innerWidth: 1480,
      innerHeight: 832,
      scale: this.getScale(),
      scaleOld: '',
      // innerWidth: window.innerWidth, 
      // innerHeight: window.innerHeight,
      padding: (window.innerHeight-896)/2,
    }
  }
  componentDidMount() {
    this.setScale()
    window.addEventListener('resize', this.setScale)
    document.getElementById('dropable').oncontextmenu = function (evt) {
      evt.preventDefault();
    };
    document.getElementById('dropable').onselectstart = function (evt) {
      evt.preventDefault();
    };
  }

  getScale=() => {
    const {width=1920, height=1080} = this.props
    
    if(this.isfull()){
      var innerWidth = window.innerWidth
      var innerHeight = window.innerHeight
    }else{
      // var innerWidth = window.innerWidth>=1504?1480:window.innerWidth-48
      // var innerHeight = window.innerWidth>=1504?832:window.innerHeight
      var innerWidth = window.innerWidth>1920?1920:window.innerWidth*0.9
      var innerHeight = window.innerWidth>1920?1080:window.innerHeight*0.9
    }
    
    let ww=innerWidth/width
    let wh=innerHeight/height
    return ww<=wh?ww: wh
  }

  setScale = debounce(() => {
    let scale=this.getScale()
    this.setState({ scale })
  }, 5)

  fullele=()=>{
    return(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement ||
      document.mozFullScreenElement ||
      null);
  }

  isfull=()=>{
    return !!(document.webkitIsFullScreen || this.fullele());
  }
  //sdsds
  //aaa
  //bbb
  render() {
    const {width=1920, height=1080, children='12322222222222'} = this.props
    const {scale} = this.state
    return(
      <Layout style={{ height: '100vh'}}>
        <FullScree></FullScree>
        <Content className="content-main">
          <div id="dropable" className='dropable' style={{width: '1920px',height: '1080px'}}>
            <div
              className="scale-box"
              style={{
                transform: `scale(${scale}) translate(-50%, -50%)`,
                WebkitTransform: `scale(${scale}) translate(-50%, -50%)`,
                width,
                height
              }} 
            >
              <Echarts></Echarts>
            </div>
          </div>
        </Content>
      </Layout>
    )
  }
}


export default App;
