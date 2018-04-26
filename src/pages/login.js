import React , { Component } from 'react'
import {

  Link
} from "react-router-dom"

import './login.css'

import Header from '../components/header.js'


class Login extends Component {
	constructor(){
		super()
		this.state = {
			user:'',
			pass:''	


		}
		this.fou = this.fou.bind(this)
		this.bul = this.bul.bind(this)
		this.login = this.login.bind(this)
		this.change = this.change.bind(this)
	}
	fou(e){
		e.target.style.backgroundColor = "#fff"
		e.target.style.color = '#353535'

	}
	bul(e){
		e.target.style.backgroundColor = "#353535"
		e.target.style.color = '#fff'

	}
	login(){

		//登录 接口
		console.log(this.state.user,this.state.pass)
		localStorage.user = this.state.user
		window.location.assign('http://localhost:3000/my')
	}
	change(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	render(){
		return(
				<div>
					<Header />
					<div className='warp'></div>
					<div className='pages'>
						<div className='pagess'>
							<h2>登录</h2>
							<div className='input'>
								登录邮箱<input onChange={this.change} name='user' onBlur={this.bul} onFocus={this.fou} type='text' value={this.state.user} placeholder='email'/><br />
								密码<input onBlur={this.bul} onFocus={this.fou} onChange={this.change} name='pass' type='password' value={this.state.pass} placeholder='password'/><br />
								<p>
								<input className='remember' type='checkbox' />记住密码<br />
								<button onClick={this.login}>登录</button><br / >
								<a href='javascript:viod(0)'>忘记密码?</a><br />
								<span>还没有账户？ 立即<Link to='/register'><i>注册</i></Link></span>
								</p>
							</div>

						</div>	
					</div>	
					<footer>
						<ul>
							<li>画旅途</li>   
							<li>© 2012 - 2017.</li>
							<li>中文</li>
							<li>English</li>
						</ul>
						<p>粤ICP备11055646号-2</p>
					</footer>
				</div>
			)
	}
}

export default Login