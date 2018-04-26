import React , { Component } from 'react'
import {

  Link
} from "react-router-dom"

import './details.css'

import Header from '../components/header.js'


class Detail extends Component {
	constructor(){
		super()
		this.state = {
			height:{},
			id:null,
			details:[
					{
						id:'0001',
						indexImg:'http://img3a.hualvtu.com/237611/20150629/2238d9e75ee3c87128ec.jpg!1920',
						title:'从草原到森林の秋日童话',
						anthor:'TOHKO',
						mounth:'SEP',
						time:'26.2011',
						add:'呼伦贝尔',
						photo:'10',
						comment:'1',
						view:'3,397',
						zan:'27',
						imgs:[
								{
									img:'http://img3a.hualvtu.com/237611/20150630/002560b621b777cf7c12.jpg!1920'		
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150629/2241ac27a7e3e72c2f0b.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150630/002661e0e5349a5e9932.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150629/2242e5e81b200d1d28b0.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150630/0024c16e367fd85820df.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150629/22283289876d11712817.jpg!1920'
								},
								
								{
									img:'http://img3a.hualvtu.com/237611/20150629/2239d6deacc053b8974a.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150629/22298c756f8fe07874bb.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150630/00237d8b19093cf7de7f.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/237611/20150629/2240cc198ca37eaa2206.jpg!1920'
								}
							],
					
					},
					{
						id:'0002',
						indexImg:'http://img3a.hualvtu.com/150088/20131121/21045d8c0fb6d53992d2.jpg!1920',
						title:"山顶白茫茫的世界 阿坝龙日坝",
						anthor:"IAGCN",
						mounth:"NOV",
						time:"21.2013",
						add:"阿坝州",
						photo:'10',
						comment:"4",
						view:"5,498",
						zan:"37",
						imgs:[
								{
									img:'http://img3a.hualvtu.com/150088/20131121/21045d8c0fb6d53992d2.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/150088/20131121/2106480736cd059438b7.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/150088/20131121/210802c1e398c5f08dc2.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/150088/20131121/210911fe12598d0f9df2.jpg!1920'
								},
								{
									img:'http://img3a.hualvtu.com/150088/20131121/21101ca06c4ee8a0a12e.jpg!1920'
								}
								,{
									img:'http://img3a.hualvtu.com/150088/20131121/2110a1d59eae72880b92.jpg!1920'
								},
								{
									img:"http://img3a.hualvtu.com/150088/20131121/21114acfd48a302c592e.jpg!1920"
								},
								{
									img:"http://img3a.hualvtu.com/150088/20131121/2123e8e5ee0bb951378f.jpg!1920"
								},
								{
									img:'http://img3a.hualvtu.com/150088/20131121/212326783d1855e0d069.jpg!1920'
								},
								{
									img:"http://img3a.hualvtu.com/150088/20131121/2127b2a9dfd2e282bd1d.jpg!1920"
								}
							]


					},
					{
						id:'0003',//
						indexImg:'http://img3a.hualvtu.com/190134/20131210/1419c0b5a98614977a7b.jpg!1920',//
						title:"陽だまり日々",//
						anthor:"YAKUSOKU",//
						mounth:"DEC",//
						time:"10.2013",//
						add:"神奈川县· 镰仓", 
						photo:'13',//
						comment:"1",//
						view:"4,358",//
						zan:"36",//
						imgs:[
								{
									img:'http://img3a.hualvtu.com/190134/20131210/1416c9d45ef74ce03979.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/190134/20131210/1417d7f6fd227392f515.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/190134/20131210/1417cc03aac9e56d42cf.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/190134/20131210/14171fac7ced37567f25.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/190134/20131210/1419c0b5a98614977a7b.jpg!1920'//
								}
								,{
									img:'http://img3a.hualvtu.com/190134/20131210/1419094b3a6c9712cad3.jpg!1920'//
								},
								{
									img:"http://img3a.hualvtu.com/190134/20131210/1421bd968198a95535b4.jpg!1920"//
								},
								{
									img:"http://img3a.hualvtu.com/190134/20131210/141951b9bdf266701eab.jpg!1920"//
								},
								{
									img:'http://img3a.hualvtu.com/190134/20131210/1420d74313fe8c66a4d9.jpg!1920'//
								},
								{
									img:"http://img3a.hualvtu.com/190134/20131210/1420400ace0264ab7eae.jpg!1920"//
								}
							]},


					
					{
						id:'0004',//
						indexImg:'http://img3a.hualvtu.com/90424/20131013/180161f859308be83a1d.jpg!1920',//
						title:"Journées du patrimoine",//
						anthor:"CERISEQIU",//
						mounth:"DEC",//
						time:"10.2013",//
						add:"巴黎 · 爱丽舍宫",
						photo:'65',//
						comment:"3",//
						view:"4,167",//
						zan:"29",//
						imgs:[
								{
									img:'http://img3a.hualvtu.com/90424/20131013/0538c72b51997fe5b46c.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/90424/20131013/1703edbaf992fbc83610.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/90424/20131013/1704b13f063eae1971ea.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/90424/20131013/1706029758e4afae4d62.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/90424/20131013/170843b5d82d1981a9e3.jpg!1920'//
								}
								,{
									img:'http://img3a.hualvtu.com/90424/20131013/17117a18be0dd0b497c7.jpg!1920'//
								},
								{
									img:"http://img3a.hualvtu.com/90424/20131013/171288175f531da207cb.jpg!1920"//
								},
								{
									img:"http://img3a.hualvtu.com/90424/20131013/17163c6fd31da1adf042.jpg!1920"//
								},
								{
									img:'http://img3a.hualvtu.com/90424/20131013/17180e414934065396ec.jpg!1920'//
								},
								{
									img:"http://img3a.hualvtu.com/90424/20131013/1723093c1128b5a492fb.jpg!1920"//
								}
								]
					},
					{
						id:'0005',//
						indexImg:'http://img3a.hualvtu.com/138140/20140209/21166a4d854152a7e9a0.jpg!1920',//
						title:"骑在台湾",//
						anthor:"KANGKANG",//
						mounth:"FEB",//
						time:"07.2014",//
						add:"台北",
						photo:'37',//
						comment:"2",//
						view:"3,847",//
						zan:"22",//
						imgs:[
								{
									img:'http://img3a.hualvtu.com/138140/20140209/21176fc5a72315c930bc.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/138140/20140209/211880e968b756bad82d.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/138140/20140209/2119636f32d03fbfecf6.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/138140/20140209/2121832b6d123bc3b933.jpg!1920'//
								},
								{
									img:'http://img3a.hualvtu.com/138140/20140209/2122d5e8c0eade9e5323.jpg!1920'//
								}
								,{
									img:'http://img3a.hualvtu.com/138140/20140209/2123b82c3c16de6da21a.jpg!1920'//
								},
								{
									img:"http://img3a.hualvtu.com/138140/20140209/21246c6b5eae942b8c67.jpg!1920"//
								},
								{
									img:"http://img3a.hualvtu.com/138140/20140209/2126124201e404fd79e0.jpg!1920"//
								},
								{
									img:'http://img3a.hualvtu.com/138140/20140209/21279fa1e7df179e4af6.jpg!1920'//
								},
								{
									img:"http://img3a.hualvtu.com/138140/20140209/21293659afa6e54295b6.jpg!1920"//
								}
								]
					}
				
				],
				show:[],
				left:0,
				num:0,
				allShow:false
		}

		this.start =this.start.bind(this)
		this.changepage = this.changepage.bind(this)
		this.changepageBack  =this.changepageBack.bind(this)
		this.back = this.back.bind(this)
	}
	componentDidMount(e){
		console.log(window.location.pathname.substring(8))
		this.setState({
			id:window.location.pathname.substring(8)
		},()=>{
			var show = this.state.details.filter((item,index)=>{
				return item.id == this.state.id
			})
			this.setState({
				show:show
			})	
		})
		
	}

	componentWillMount(e){

		this.setState({
				height:{
					height:document.documentElement.clientHeight
				}
					
		})
		var _this = this
		window.addEventListener('resize',()=>{
			_this.setState({
				height:{
					height:document.documentElement.clientHeight
				}
					
			})
		})
		
		 
	}
	start(){
		this.setState({
			allShow:true
		})

	}
	changepage(){
		if(this.state.num == 9){
			this.setState({
				left:0,
				num:0
			})
			return
		}
		this.setState({
			left:this.state.left + (-110),
			num:this.state.num + 1
		})


		
	}
	changepageBack(){
		if(this.state.num == 0){
			this.setState({
				num:0,
				left:0,
				allShow:false
			})
			return
			
		}
		this.setState({
			left:this.state.left + (110),
			num:this.state.num - 1
		})

	}
	back(){
		this.setState({
			allShow:false
		})
	}

	render(){
		if(this.state.show && this.state.show.length != 0 ){
			var li = this.state.show.map((item,index)=>{
				console.log(item.imgs)
			return(
						<div key={index} className='bix' style={this.state.height}>
						<div className='left'>
							<img src={item.indexImg} />
						</div>
						<div className='right'>
							<div className='text'>
								<p className='title'>{item.title}</p>
								<p className='hr'></p>
								<p className='an'>BY {item.anthor}</p>
								<p className='more'>
									<span>· {item.add} </span>
									<span>{item.photo}照片 </span>
									<span>{item.comment}评论 </span>
									<span>{item.view}浏览 </span>
									<span>{item.zan}赞 </span>


								</p>
								{item.muse? <p>xxx</p>:''}

							</div>
							<button onClick={this.start}>开始</button>
								<span className='center'>
									<span className='mounth'>{item.mounth}</span><br />
									<span className='time'>{item.time}</span>
								</span>

						</div>	
					</div>
					)


			})
			var img = this.state.show.map((item,index)=>{
				var img ;
				 img = item.imgs.map((ites,ind)=>{
					return (
							
								<li onDoubleClick={this.back} key={ind}>
									<img src={ites.img} />
								</li>
							
						)
				})
				return img 
			})

			
		}
		

		return(
				<div>
					<Header transparent='transparent'/>
					{li}
					{this.state.allShow?
						<div className='all' >
						<span className='lefts' onClick={this.changepageBack}> &lt; </span>
						<ul style={{left:this.state.left + '%'}}  id='ul'>
							{img}
						</ul>
						<span className='right' onClick={this.changepage}> &gt; </span>

					</div>:''
					}

				</div>
			)
	}

}
export default Detail
