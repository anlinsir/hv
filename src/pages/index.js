
import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from "react-router-dom"

import Loadable from 'react-loadable';
/*********/
import './index.css'
import Header from '../components/header.js'
/*****/
import IIndex from '../components/index/index'
import Maps from '../components/index/map'


class Index extends Component{
	constructor(){
		super()
	}

	render(){
		return(
				<div>
					<Header />
					<div className='store'></div>
					 
					<Switch>
						<Route path="/index/index" component={IIndex}></Route>
						<Route path="/index/map" component={Maps}></Route>
						<Route path="/index/search" render={()=>{return <div>122222222222222222222222222</div>}}></Route>
          				<Redirect exact path="/index" to="/index/index" />

					</Switch>
					

				

				</div>
			)
	}


}


export default Index