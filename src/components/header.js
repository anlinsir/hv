import React , { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  NavLink
} from "react-router-dom"
import './header.css'
class Header extends Component{
	constructor(){
		super()
		this.state = {
			serachShow:false,
			style:{
				backgroundColor:'transparent', 
				top:0,
				position: 'absolute'
			},
			value:''	


		}
		this.searchShow = this.searchShow.bind(this)
		this.search = this.search.bind(this)
		this.change = this.change.bind(this)
	}
	searchShow(){
		this.setState({
			searchShow:!this.state.searchShow
		})

	}
	search(){
		console.log(this.state.value)
		window.location.assign(`http://localhost:3000/search/${this.state.value}`)

	}
	change(e){
		this.setState({
			value:e.target.value
		})
	}

	render(){
		return(
				<div className="headerWarp"  style={this.props.transparent?this.state.style:null}>
					<div className='header'>
						<div className='headerLeft'>
							<div className='huav'>画旅途</div>	
							<ul>
							
								<li><NavLink to="/index/index"><i className='iconfont icon-ai-home'></i></NavLink></li>
								<li><NavLink to="/index/map"><i className='iconfont icon-tansuob'></i></NavLink></li>
								<li onClick={this.searchShow}><i className='iconfont icon-sousuosearch82'></i></li>
							

							</ul>
							{this.state.searchShow?
									<div className='input'>
										<input type='text' onChange={this.change} value={this.state.value} placeholder='search'/>
										<button onClick={this.search}>sea </button>
									</div>:''
							}
						</div>
						<div className='headerRight'>
							<NavLink to="/login"><div className='login'>登录</div></NavLink>
						</div>

					</div>
				</div>
			)
	}


}

export default Header