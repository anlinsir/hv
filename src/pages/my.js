import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
}from 'react-router-dom'
import Loadable from 'react-loadable'

/*********/
import Header from '../components/header.js'
import './my.css'




class My extends Component {
  render() {
    return (
        <div>
            <Header />
            <div className='warp'></div>
            <div className='myBox'>
                <div className='mbox'>

                  <div className='left'>
                    <p className='name'>未名</p>
                    <p className='anth'>BY <span>{(localStorage.user)}</span><span className='fr'>关注 0  |  粉丝 0  |  旅行纪年  |  赞</span></p>
                    <p>如画旅途</p>
                  </div>

                  <div className='right'>
                    <div className='createBox'>
                      <div className='point'>
                        <i className='iconfont icon-yingyong'></i>
                      </div>
                      <div className='creLeft'>

                      </div>
                      <div className='creRight'>新建专辑</div>

                    </div>
                  </div>
                </div>
            </div>

             <div className='myProduct'>
                <div className='roduct'>
                </div>
             </div>

             <div className='footer'>
              <span>  画旅途 © 2012 - 2017. 中文 English </span><span>粤ICP备11055646号-2</span>
             </div>



        </div>
    );
  }
}

export default My;
