import React from 'react'

const Contact = () => {
  return (
    <div className='contact container'>
      <div className="row">
        <div className="col s12 m4">
          <h4 className='grey-text text-darken-3 center-align'>Connect with us</h4>
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
        <div className="col s12 m4" id='message-box'>
          <br />
          <div className="input-field">
            <textarea placeholder='Your message' name="message" cols="30" rows="10" className="materialize-textarea"></textarea>
          </div>
          <input type="submit" className="btn grey " value="submit" />
        </div>


        <div className="col s12 m4">
          <h5 className="center-align">Follow Us</h5>
          <div className="row">
            <a href="" className="grey-text"><i className="fab circle fa-facebook"></i></a>
            <a href="" className="grey-text"><i className="fab circle fa-twitter"></i></a>
            <a href="" className="grey-text"><i className="fab circle fa-linkedin"></i></a>
            <a href="" className="grey-text"><i className="fab circle fa-google-plus"></i></a>
            <a href="" className="grey-text"><i className="fab circle fa-pinterest"></i></a>
          </div>

          <div className="row">
            <h6>Contact</h6>
            <p>johndoe@gmail.com</p>
            <p>98979986475</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Contact
