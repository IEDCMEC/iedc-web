import React from 'react'

const Achievements = () => {
	return (
		<section className="achievements section">
			<div className="container">
				<h3 className='grey-text text-darken-3 center-align'>Achievements</h3>
				<div className="row ">
					<div className="col s6 m3">
						<div className="card">
							<div className="card-image">
								{/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
								<img src={require('../Assets/sample.jpeg')} alt="1" className="responsive-img" />
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

					<div className="col s6 m3">
						<div className="card">
							<div className="card-image">
								{/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
								<img src={require('../Assets/sample.jpeg')} alt="1" className="responsive-img" />
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

					<div className="col s6 m3">
						<div className="card">
							<div className="card-image">
								{/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
								<img src={require('../Assets/sample.jpeg')} alt="1" className="responsive-img" />
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

					<div className="col s6 m3 valign-wrapper ">
						<div style={{ 'min-height': '41.5vh' }} className="card-panel  grey waves-effect">
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
