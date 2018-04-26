import React,{Component} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"

import './index.css'
import Baneer from '../../img/banner.png'

import Hot from '../indexCom/indexHot.js'
class IIndex extends Component{
	constructor(){
		super()
		this.state = {
			navList:[
				{
					router:'/index/index/hot',
					name:"热门专辑"
				},
				{
					router:'/index/index/new',
					name:"最新专辑"	
				}
			]
		}
	}


	render(){
		var NavList = this.state.navList.map(function(item,index){
			return <li key={index}><NavLink to={item.router}>{item.name}</NavLink></li>
		})
		return(
				<div className='IIndexWarps'>

					<div className='IIndexWarp'>
						<div className='IIndexImg'>
							<img src={Baneer} />
						</div>

						<div className="IIndexNav">
							
							<ul>
								{NavList}
							</ul>
							<Switch>
								<Route path="/index/index/hot" component={Hot}></Route>
          						<Redirect exact path="/index/index" to="/index/index/hot" />								
							</Switch>
						</div>






					</div>
					
				</div>
			)
	}
}

export default IIndex
