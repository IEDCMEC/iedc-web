import React from 'react'
import "../index.css";

const Contact = () => {
  return (
    <div id="top_margin">
    <section  id="box_curve_top">

    <div className='contact container' id="centre_mobile" id="contact">
      <div className="row">
        <div className="col s12 m4">
          <h4 className='grey-text text-darken-3' id="bottom_margin">Connect with us</h4>
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
          <br />
          <div className="input-field">
            <textarea placeholder='Your message' name="message" cols="30" rows="10" className="materialize-textarea"></textarea>
          </div>
          <input type="submit" className="btn grey" value="submit" />
        </div>


        <div className="col s12 m4 margin_top_mobile">
          <h4 id="bottom_margin">Follow Us</h4>
          <div className="col s12 m10">

          <div className="row">
            <a href="" className="grey-text" id="icon_space"><i className="fab circle fa-facebook"></i></a>
            <a href="" className="grey-text" id="icon_space"><i className="fab circle fa-twitter"></i></a>
            <a href="" className="grey-text" id="icon_space"><i className="fab circle fa-linkedin"></i></a>
            <a href="" className="grey-text" id="icon_space"><i className="fab circle fa-google-plus"></i></a>
            <a href="" className="grey-text" id="icon_space"><i className="fab circle fa-pinterest"></i></a>
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

    </section>
    </div>
  )
}

export default Contact
