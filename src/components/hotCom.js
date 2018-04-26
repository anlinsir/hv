import React ,{ Component } from 'react'


class HotCom extends Component {
	constructor(){
		super()
		this.getDateils = this.getDateils.bind(this)
	}
	getDateils(e){
		//点击获取id 通过id找
		//this.props.history.push(`/detail/${e.target.dataset.id}`)
		window.location.href=`http://localhost:3000/detail/${e.target.dataset.id}`  

	}
	render(){
		return(
				
					<div  data-id={this.props.id} onClick={this.getDateils} style={this.props.style} className='Box'>
						<span data-id={this.props.id} className='BoxTitle'>{this.props.title}</span>
						<div data-id={this.props.id} className='BoxWarp'>
							<span data-id={this.props.id} className='BoxAuthor'>{this.props.author}&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span data-id={this.props.id} className='BoxAddress'>{this.props.address}&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<br />
							<span data-id={this.props.id} className='BoxTime'>{this.props.time}&nbsp;&nbsp;&nbsp;&nbsp;</span>
							<span data-id={this.props.id} className='BoxCommentNum'>{this.props.commentNum}评论</span>

						</div>
						<i data-id={this.props.id} className='iconfont icon-yingyong'></i>

						<img data-id={this.props.id} src={this.props.img} alt='PIC IS NOT'/>
					</div>
			)
	}

}

export default HotCom