import React from 'react'
import "../index.css";

const Contact = () => {
  return (
    <div id="top_margin">
    <section  id="box_curve_top">

    <div className='contact container' id="centre_mobile">
      <div className="row" id="contact">
        <div className="col s12 m4">
          <h4 className='text-darken-3' id="bottom_margin">Connect with us</h4>
          <form>
            <div className="input-field">
              <input type="text" name='name' />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="input-field">
              <input type="email" name='email' />
              <label htmlFor="email">Your email</label>
            </div>
            <div className="input-field">
              <input type="text" name='number' />
              <label htmlFor="number">Your Phone Number</label>
            </div>
          </form>
        </div>
        <div className="col s12 m4 center-align" id='message-box'>
        <div className="message_box">
						<div className="col s6 m3" id="announcements_card">
						<div className="card" id="curve_border">
							
							<div className="card-content" style={{'color':'rgb(223, 218, 218)'}}>
							<br />
          <div className="input-field">
            <textarea placeholder='Your message' name="message" cols="30" rows="10" className="materialize-textarea"></textarea>
          </div>
          <input type="submit" className="btn" value="submit" style={{'background-color':'#C33427'}}/>
        </div>
        </div>
							
						</div>
					</div>
						</div>
          


        <div className="col s12 m4 margin_top_mobile">
          <h4 id="bottom_margin">Follow Us</h4>
          <div className="col s12 m10">

          <div className="row">
            <a href=""  style={{'color':'#C33427'}} id="icon_space"><i className="fab circle fa-facebook"></i></a>
            <a href=""  style={{'color':'#C33427'}} id="icon_space"><i className="fab circle fa-twitter"></i></a>
            <a href=""  style={{'color':'#C33427'}} id="icon_space"><i className="fab circle fa-linkedin"></i></a>
            <a href=""  style={{'color':'#C33427'}} id="icon_space"><i className="fab circle fa-google-plus"></i></a>
            <a href=""  style={{'color':'#C33427'}} id="icon_space"><i className="fab circle fa-pinterest"></i></a>
          </div>

          <div className="row margin_top_mobile">
            <h4>Contact</h4>
            <p>johndoe@gmail.com</p>
            <p>98979986475</p>
          </div>
        </div>
</div>

      </div>
    </div>

    <div className="extra_bottom">

    </div>

    </section>
    </div>
  )
}

export default Contact
