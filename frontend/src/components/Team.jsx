import React, { Component } from 'react'
import CarouselSlider from 'react-carousel-slider';

class Team extends Component {
	render() {

		let data = [
			{
				des: "John Doe",
				imgSrc: `${require('../Assets/sample.jpeg')}`
			},
			{
				des: "Lynn Mathew",
				imgSrc: `${require('../Assets/s2.jpeg')}`
			},
			{
				des: "3",
				imgSrc: `${require('../Assets/gallery5.png')}`
			},
			{
				des: "Tony Stark",
				imgSrc: `${require('../Assets/TS.jpeg')}`
			},
		];

		return (
			<div className="Team">

 			<div className="center">
 				<h3 className=' text-darken-3 center-align' id="bottom_margin">Our Team</h3>
			</div>
				
				<CarouselSlider 
				dotsSetting={{
					style: {
						dotColor: "#dbdbdb",
						currDotColor: "#ff0000"
					}
				}}
				buttonSetting={{
					placeOn: "bottom-beneath"
				}} 
				slideItems={data} />
			</div>
		)
	}
}

export default Team
