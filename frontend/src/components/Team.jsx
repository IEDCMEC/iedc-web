import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const Team = () => {

	useEffect(() => {
		// var height = window.innerWidth > 440 ? 265 : 400
		const options = {
			// height:400,
			interval:4000			
		}
		var elems = document.querySelectorAll('.slider');
		M.Slider.init(elems,options);
		console.log( window.innerWidth);
	})
	
	
	return (
		<section className="section team">
			<div className="container">
				<div className="center">
				<h3 className='grey-text text-darken-3 center-align' id="bottom_margin">Our Team</h3>
					<div className="slider">
						<ul className="slides grey lighten-5">
							<li>
								<div class="row">
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>

									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/s2.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/s2.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/s2.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/s2.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
									<div className="col s6 m3">
										<div className="card-panel">
											<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
											<span>John Doe</span>
										</div>
									</div>
								</div>
							</li>

						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Team
