import React, { Component } from 'react'
import CarouselSlider from 'react-carousel-slider';
import "../index.css";

class Team extends Component {
	render() {
		let textBoxStyle = {
			width: "99%",
			background: '#C33427',
			textAlign: "center",
			color: "white",
			marginTop:"5em"
		};

		let data = [
			<div className="card-panel">
				<div className="image" className="square">
					<img src={require('../Assets/t.jfif')} alt="" className="circle" />
					<p style = {textBoxStyle}>Richard</p>
				</div>
			</div>,
			<div className="card-panel">
				<div className="image">
					<img src={require('../Assets/t.jfif')} alt="" className="circle" />
					<p style = {textBoxStyle}>Richard</p>
				</div>
			</div>,
			<div className="card-panel">
				<div className="image">
					<img src={require('../Assets/t.jfif')} alt="" className="circle" />
					<p style = {textBoxStyle}>Richard</p>
				</div>
			</div>,
		]

		return (
			<div className="Team" id="team" style={{'margin-bottom':'5em'}}>

 			<div className="center">
 				<h3 className='pos'>Our Team</h3>
			</div>
				
				<CarouselSlider 
				dotsSetting={{
					style: {
						dotColor: "#dbdbdb",
						currDotColor: '#C33427'
					}
				}}
				manner={{
					autoSliding:{interval: "3s"}
				}}
				accEle={{
					button:'false'
				}}
				buttonSetting={{
					placeOn: "bottom-beneath",
					style:{left:{background: '#C33427', display:'none'}, right:{background: '#C33427', display:'none'}},
					}} 
				slideCpnts={data}
				sliderBoxStyle={{
					background: '#ffffff'
				}}
				// slideItems={data} 
				/>
			</div>
		)
	}
}

export default Team
