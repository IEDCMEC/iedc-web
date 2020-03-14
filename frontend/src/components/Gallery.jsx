import React, { useEffect } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';
import "../index.css";

const Gallery = () => {

	useEffect(()=>{
		var elems = document.querySelectorAll('.materialboxed');
    M.Materialbox.init(elems);
	})

	return (
		<div className='gallery section' id="gallery">
			<div className="container center">
				<h3 className='grey-text text-darken-3 center-align' id="bottom_margin">Gallery</h3>
				<div class="row">
					<div class="col s12 m3">
						<img style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" className="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m3">
						<img style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m3">
						<img style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m3">
						<img style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img"  id="curve_border"/>
					</div>
				</div>
				<div class="row">
					<div class="col s12 m3">
						<img style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m3">
						<img  style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" class="materialboxed responsive-img mobile_space"  id="curve_border"/>
					</div>
					<div class="col s12 m3">
						<img  style={{ 'min-height': '25vh', 'width':'100%' }} src={require("../Assets/s2.jpeg")} alt="" class="materialboxed mobile_space"  id="curve_border"/>
					</div>
					<div className="col s12 m3" id="curve_border">
						<div style={{ 'min-height': '25vh', 'width':'100%', 'margin-top':'0' }} className="card-panel  grey waves-effect" id="curve_border">
								<i className="material-icons right">arrow_forward</i>
								See More
						</div>
					</div>
				</div>
				
			</div>
		</div>
	)
}

export default Gallery
