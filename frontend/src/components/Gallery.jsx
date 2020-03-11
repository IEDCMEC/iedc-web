import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const Gallery = () => {

	useEffect(()=>{
		var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
	})

	return (
		<div className='gallery section'>
			<div className="container center">
				<h3 className='grey-text text-darken-3 center-align'>Gallery</h3>
				<div class="row">
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
				</div>
				<div class="row">
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
				</div>
				<div class="row">
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
					<div class="col s12 m3">
						<img src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Gallery
