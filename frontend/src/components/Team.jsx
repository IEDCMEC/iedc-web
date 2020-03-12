import React from 'react'

const Team = () => {
	return (
		<section className="section team" id="team">
			<div className="container">
				<div className="center">
					<div className="slider">
						<ul className="slides">
							<li>
								<div className="card-panel">
									<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
									<span>Name</span>
								</div>
							</li>
							<li>
								<div className="card-panel">
									<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
									<span>Name</span>
								</div>
							</li>
							<li>
								<div className="card-panel">
									<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
									<span>Name</span>
								</div>
							</li>
							<li>
								<div className="card-panel">
									<img src={require('../Assets/sample.jpeg')} alt="" className="circle" />
									<span>Name</span>
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
