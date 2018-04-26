import React ,{ Component } from 'react'
import './mapitem.css'


import China from '../../img/china.png'
import asia from '../../img/asia.png'
import europe from '../../img/europe.png'
import north from '../../img/north-america.png'
import south from '../../img/south-america.png'
import africa from '../../img/africa.png'
import oceania from '../../img/oceania.png'

class MapItem extends Component {
	constructor(){
		super()
		this.state = {
			
			
		}
		this.getCity = this.getCity.bind(this)
	}
	getCity(e){
		var choose = [e.target.innerHTML,this.props.name]
		this.props.changeArea(choose)
	}

	render(){
		var li,liT,liTT,posi;
		//不知道为什么 拿到props 不能用数组的方法
		//在这里判断  有就走前一个   没有就先放一个空数组
		this.props.location ? 
		li = this.props.location.map((item,index)=>{
			return <li onClick={this.getCity} key={index}><a href='javascript:void(0)'>{item}</a></li>
		}):[]

		this.props.locationT ?
		liT = this.props.locationT.map((item,index)=>{
			return <li onClick={this.getCity} key={index}><a href='javascript:void(0)'>{item}</a></li>
		}):[]

		this.props.locationTT ?
		liTT = this.props.locationTT.map((item,index)=>{
			return <li onClick={this.getCity} key={index}><a href='javascript:void(0)'>{item}</a></li>
		}):[]

		this.props.data?
		posi = this.props.data.map((item,index)=>{
			return <li key={index} className={'posi' + index + item}>{item}</li>
		}):[]

		return(
				

						<div className='mapiter'>



							<div className='mapItemImg'>
								<div className='itemImgTitle'>{this.props.name}</div>
								<div className='maptext'>
									<ul>
										{posi}
									</ul>
								</div>
								<img src={this.props.img} className='itemImg' />
							</div>

						


							<div className='itemName'>
								<div className='itemNameTitle'>热门目的地</div>
								

								<div className='itemNameContent'>
									<ul>
										{li}
										

									</ul>
									<ul>
										{liT}
											

									</ul>
									<ul>
										{liTT}
									</ul>
										
								</div>

							</div>



						</div>

				
			)
	}
}

export default MapItem