import React ,{ Component } from 'react'
import './map.css'
import MapItem from '../map/mapitem'

import China from '../../img/china.png'
import asia from '../../img/asia.png'
import europe from '../../img/europe.png'
import north from '../../img/north-america.png'
import south from '../../img/south-america.png'
import africa from '../../img/africa.png'
import oceania from '../../img/oceania.png'



class Maps extends Component {
	constructor(){
		super()
		this.state = {
			confi:'城市',
			area:"世界",
			mapitem:[],
			data:[
					{
						img:China,
						name:'中国',
						location:['北京', '厦门', '香港', '上海', '杭州', '丽江' ,'成都', '苏州', '台北','西安', '南京','黄山' ,'九寨沟', '澳门' ,'桂林' ,'乌镇' ,'广州' ,'张家界' ,'大理', '哈尔滨' ],
						locationT:['昆明', '西塘', '扬州', '凤凰古城', '婺源', '长白山' ,'西双版纳','香格里拉' ,'大连', '阳朔' ,'青海湖' ,'泸沽湖' ,'呼伦贝尔' ,'稻城－亚丁' ,'深圳', '天津' ,'武汉', '无锡', '长沙', '敦煌'],
						data:['四川','云南', '北京' ,'天津','福建', '广东','广西' ,'江西', '上海', '西藏', '新疆', '青海' ,'甘肃' ,'宁夏','贵州','湖南' ,'海南', '台湾', '浙江' ,'安徽' ,'湖北', '重庆', '陕西', '河南', '河北', '山西', '山东' ,'江苏' ,'内蒙古', '辽宁', '吉林' ,'黑龙江','香港', '澳门']


					},
					{
						img:asia,
						name:'亚洲',
						location:['东京', '首尔', '普吉岛', '新加坡' ,'巴厘岛', '济州岛' ,'曼谷', '清迈', '马尔代夫' ,'大阪' ,'沙巴' ,'京都' ,'冲绳' ,'北海道' ,'暹粒' ,'吴哥窟' ,'苏梅岛', '吉隆坡' ,'长滩岛', '迪拜', '槟城', '兰卡威'],
						locationT:[ '江原道', '名古屋', '皮皮岛', '胡志明市', '孟买','加德满都', '马尼拉', '斋浦尔','热浪岛', '薄荷岛' ,'耶路撒冷', '阿格拉', '仰光' ,'阿布扎比' ,'廷布' ,'琅勃拉邦' ,'德里','瓦拉纳西'],
						data:['沙特阿拉伯', '阿塞拜疆' ,'蒙古国', '伊朗', '科威特','卡塔尔' ,'哈萨克斯坦', '不丹' ,'印度' ,'尼西亚' ,'马来西亚', '斯里兰卡' ,'马尔代夫' ,'新加坡', '菲律宾' ,'柬埔寨', '阿联酋' ,'尼泊尔' ,'以色列' ,'越南', '泰国', '老挝' ,'缅甸' ,'印度', '约旦' ,'韩国', '朝鲜' ,'日本', '俄罗斯' ,'土耳其']
					},
					{
						img:europe,
						name:'欧洲',
						location:['巴黎' ,'伦敦', '罗马', '威尼斯','巴塞罗那', '佛罗伦萨' ,'布拉格', '圣托里尼岛', '法兰克福','慕尼黑','里昂' ,'科隆', '赫尔辛基' ,'牛津','马赛'],
						locationT:[ '雅典' ,'维也纳', '柏林', '莫斯科', '马德里' ,'伊斯坦布尔' ,'圣彼得堡' ,'布达佩斯', '哥本哈根', '剑桥', '萨尔茨堡' ,'湖区国家公园', '里斯本'],
						locationTT:['奥斯陆' ,'梵蒂冈' ,'戛纳' ,'维罗纳' ,'锡耶纳' ,'雷克亚未克' ,'普罗旺斯', '斯德哥尔摩' ,'卑尔根' ,'阿姆斯特丹' ,'琉森']
					},
					{
						img:north,
						name:'北美',
						location:['纽约' ,'拉斯维加斯', '旧金山', '洛杉矶', '多伦多' ,'盐湖城', '蒙特利尔', '佛罗里达', '芝加哥', '维多利亚','温哥华' ,'波士顿' ,'卡尔加里' ],
						locationT:['华盛顿', '夏威夷' ,'圣地亚哥', '西雅图','佩吉市', '约塞米蒂国家公园', '塞班岛', '水牛城' ,'渥太华', '魁北克市', '贾斯珀' ,'威士拿'],
						locationTT:['蒙特雷', '列治文', '埃德蒙顿', '怀特霍斯', '阿纳海姆', '坎昆', '墨西哥城', '波特兰' ,'匹兹堡' ,'圣西米恩', '贝克山' ,'费城' ,'哈瓦那']
					},
					{
						img:south,
						name:'南美',
						location:['里约热内卢' ,'圣保罗', '库斯科' ,'马丘比丘', '乌斯怀亚' ],
						locationT:['门多萨','布宜诺斯艾利斯' ,'累西腓', '卡奈玛国家公园']
					},
					{
						img:africa,
						name:'非洲',
						location:['开罗' ,'开普敦', '卢克索', '阿斯旺', '亚历山大', '红海和西奈半岛', '马赛马拉国家公园', '蒙巴萨', '桑给巴尔' ,'毛里求斯' ,'拉巴特' ,'约翰内斯堡' ,'德班' ,'太阳城'],
						locationT:['比勒陀利亚', '梅尔祖卡', '马拉喀什','艾西拉' ,'伊尔富德','纳库鲁', '罗安达' ,'路沙卡' ,'维多利亚瀑布城', '费拉菲拉绿洲', '塞得港', '喀土穆', '马拉博', '巴塔']
					},
					{
						img:oceania,
						name:'大洋洲',
						location:['悉尼' ,'皇后镇', '墨尔本', '奥克兰', '基督城', '阿德莱德', '惠灵顿', '凯恩斯', '北领地' ,'布里斯班' ,'塔斯马尼亚', '珀斯', '黄金海岸', '袋鼠岛', '堪培拉'],
						locationT:['特卡波湖' ,'米尔福德峡湾', '罗托鲁瓦','库克山国家公园','达尼丁' ,'怀卡托','凯库拉','福克斯冰川' ,'瓦纳卡湖', '蒂阿瑙湖' ,'陶波' ,'科罗尔' ,'苏瓦']
					}				
				]
		}
		this.changeArea = this.changeArea.bind(this)
	}
	componentWillMount(){
		this.state.mapitem.length = 7
		this.state.mapitem.fill(0)
	}
	changeArea(choose){
		this.setState({
			confi:choose[0],
			area:choose[1]
		})
	}

	render(){
		var li = this.state.data.map((item,index)=>{
			return <MapItem data={item.data}  changeArea={this.changeArea} key={index} img={item.img} name={item.name} location={item.location} locationT={item.locationT} locationTT={item.locationTT}></MapItem>
		})

		return(
				<div>
					<div className='mapinfowarp'>
						<div className='mapinfo'>
							<h4>目的地</h4>
							<ul className='mapdestination'>								
								<li><i style={{color:'#2c97de',fontSize:'12px'}} className="iconfont icon-ai-home"></i> &nbsp;&nbsp;/&nbsp;&nbsp;</li>
								<li>目的地 </li>
								{this.state.area?<li>&nbsp;&nbsp;/&nbsp;&nbsp;{this.state.area}</li>:''}

								{this.state.confi?<li>&nbsp;&nbsp;/&nbsp;&nbsp;{this.state.confi}</li>:''}

							</ul>
						</div>
					</div>

				<div className='mapitemWarp'>
					<div className='itemWarp'>

					{li}

				</div>
					</div>



				</div>
					
			)
	}

}

export default Maps