import React , { Component } from 'react'
import {

  Link
} from "react-router-dom"
import Header from '../components/header.js'
import './login.css'


class Register extends Component{
	constructor(){
		super()
		this.state = {
			user:'',
			pass:"",
			passinfo:""
		}
		this.change = this.change.bind(this)
		this.register = this.register.bind(this)
	}
	change(e){
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	register(){
		if(this.state.pass != this.state.passinfo){
			alert('两次密码不一致')
			return
		} 
		console.log('OK ')

	}
	render(){
		return(
			<div>
				<Header />
				<div className='warp'></div>
					<div className='pages'>
						<div className='pagess'>
							<h2>注册</h2>
							<div className='input'>
								登录邮箱<input onChange={this.change} value={this.state.user} type='text' name='user' placeholder='email'/><br />
								密码<input onChange={this.change} value={this.state.pass}  type='password' name = 'pass' placeholder='password'/><br />
								确认密码<input onChange={this.change} value={this.state.passinfo}  type='password' name='passinfo' placeholder='password'/><br />

								<p>
								<input className='remember' type='checkbox' />同意用户协议 <br />
								<button onClick={this.register} >注册</button><br / >
								
								<span>已有账户！ 立即<Link to='/login'><i>登录</i></Link></span>
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

export default Register