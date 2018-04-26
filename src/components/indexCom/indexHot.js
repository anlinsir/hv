import React , {Component} from 'react'

import './indexHot.css'
import HotCom from '../hotCom.js'
import axios from 'axios'

class Hot extends Component {
	constructor(){
		super()
		this.state = {
			style : {height:'325px',width:'540px',marginBottom:'50px'},
			list:[	
				
				{
					title:"从草原到森林の秋日童话",
					author:'tohko',
					address:"呼伦贝尔",
					time:'2014-03-03',
					img:'http://img3a.hualvtu.com/237611/20150629/2238d9e75ee3c87128ec.jpg!800',
					id:'0001'
				},
				{
					title:"山顶白茫茫的世界 阿坝龙日坝",
					author:'iagcn',
					address:"阿坝州",
					time:'2014-08-18',
					img:"http://img3a.hualvtu.com/150088/20131121/21045d8c0fb6d53992d2.jpg!800",
					id:'0002'

				},
				{
					title:'陽だまり日々',
					author:'yakusoku',
					address:"神奈川县·镰仓",
					time:'2014-03-03',
					img:'http://img3a.hualvtu.com/190134/20131210/1419c0b5a98614977a7b.jpg!800',
					id:'0003'

				},
				{
					title:'Journées du patrimoine',
					author:'ceriseqiu',
					address:"巴黎·爱丽舍宫",
					time:'2017-09-30',
					img:'http://img3a.hualvtu.com/90424/20131013/180161f859308be83a1d.jpg!800',
					id:'0004'

				},
				{
					title:"骑在台湾",
					author:"kangkang",
					address:"台北",
					time:"2014-02-07 ",
					img:"http://img3a.hualvtu.com/138140/20140209/2151279381f8a60c3670.jpg!800",
					id:'0005'

				},
				{
					title:"色达之光",
					author:"xingshe",
					address:"甘孜·五明佛学院",
					time:"2013-04-05",
					img:"http://img3a.hualvtu.com/253247/20130615/2046929500bfda74ed09.jpg!800",
					id:'0006'

				},
				{
					title:"雨之国孟加拉",
					author:"sjax001",
					address:"达卡",
					time:"2015-06-11",
					img:"http://img3a.hualvtu.com/71174/20150618/164718bc5067a529cdde.jpg!800",
					id:'0007'

				},
				{
					title:"Royal Adelaide Show 2013 <1>",
					author:"armslavearbalest",
					address:"阿德莱德",
					time:"22013-09-12",
					img:"http://img3a.hualvtu.com/54325/20130912/210067db82537f63d0c3.jpg!800",
					id:'0008'

				},
				{
					title:"拉布雷斯印象",
					author:"richardma",
					address:"拉布雷斯",
					time:"2015-05-199",
					img:"http://img3a.hualvtu.com/61779/20150530/001401457832e37261a0.jpg!800",
					id:'0009'

				},
	
			],
			commentNum:0,
			num:[],
			splice:1,
			newsplice:10

		}
		this.pagechange = this.pagechange.bind(this)
	}
	componentWillMount(){
		this.state.num.length = Math.ceil(this.state.list.length/10)
		this.state.num.fill(0)
	}
	pagechange(e){
		// console.log(e.target.innerHTML)
		// 	var aa = this.state.newsplice//10 20
		// // this.setState({
		// // 	newsplice:this.state.newsplice*e.target.innerHTML,//20 60
		// // 	splice:aa+1//11 21
		// // })
		console.log('分页的问题还没解决')
		
	}

	render(){
		// .slice(this.state.splice,this.state.newsplice+1)
		var li = this.state.list.map((item,index)=>{
			return <HotCom id={item.id}  key={index} commentNum={this.state.commentNum} time={item.time} address={item.address} author={item.author} style = {this.state.style} title={item.title} img={item.img}/>	
		})
		console.log(this.state.num)
		var nums = this.state.num.map((item,index)=>{
			return <li onClick={this.pagechange} key={index}><a href='javascript:void(0)'>{index+1}</a></li>
		})		
		console.log(nums)
		return(
			<div>
				<div className='Warp' >
					{li}
					

				</div>
				<div className='ulWarp'>
					<ul>
						{nums}
						<li><a href='javascript:void(0)'>>></a></li>
					</ul>
				</div>
			</div>
			)
	}
}

export default Hot

