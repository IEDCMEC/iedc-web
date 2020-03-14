import React from 'react'


const Achievements = () => {
	return (
		<section className="achievements section" id="section_spacing">
			<div className="container" id="achievements">
				<h3 className='grey-text text-darken-3 center-align' id="bottom_margin">Achievements</h3>
				<div className="row ">
				
					<div className="col s12 m3">
						<div style={{ 'min-height': '41.5vh' }} className="card" id="curve_border">
							<div className="card-image">
								{/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
								<img src={require('../Assets/sample.jpeg')} alt="1" className="responsive-img" id="curve_border_top"/>
								<span className="card-title">Card Title</span>
							</div>
							<div className="card-content">
								<p>Sample text</p>
							</div>
							<div className="card-action">
								<a href="#">More Details</a>
							</div>
						</div>
					</div>

					<div className="col s12 m3">
						<div style={{ 'min-height': '41.5vh' }} className="card" id="curve_border">
							<div className="card-image">
								{/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
								<img src={require('../Assets/sample.jpeg')} alt="1" className="responsive-img" id="curve_border_top"/>
								<span className="card-title">Card Title</span>
							</div>
							<div className="card-content">
								<p>Sample text</p>
							</div>
							<div className="card-action">
								<a href="#">More Details</a>
							</div>
						</div>
					</div>

					<div className="col s8 m3">
						<div style={{ 'min-height': '41.5vh' }} className="card" id="curve_border">
							<div className="card-image">
								{/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
								<img src={require('../Assets/sample.jpeg')} alt="1" className="responsive-img" id="curve_border_top"/>
								<span className="card-title">Card Title</span>
							</div>
							<div className="card-content">
								<p>Sample text</p>
							</div>
							<div className="card-action">
								<a href="#">More Details</a>
							</div>
						</div>
					</div>

					<div className="col s4 m3 valign-wrapper" id="curve_border">
						<div style={{ 'min-height': '41.5vh', 'width':'100%', 'text-align':'center' }} className="card-panel  grey waves-effect" id="curve_border">
								<i className="material-icons right">arrow_forward</i>
								See More
						</div>
					</div>


				</div>
			</div>
		</section>

	)
}

export default Achievements
