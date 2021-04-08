import React from 'react';
import '../css/popup_style.css';

import axios from 'axios';


class Popup extends React.Component {
  constructor() {
    super();
    this.state = {
      announcement: [],
    }
  }

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/imageupload/")
      .then(res => this.setState({ announcement: res.data }))
  }

  render() {
    const display_announcement = this.state.announcement.map(announcements => {
      return (
        <div>
          <div className="col s12 m3">
            <div className="card card_design" id="curve_border">
              <div className="card-image">
                {/* <img src={require('../Assets/sample.jpeg')} alt='1'> */}
                <img
                  src={announcements.image}
                  alt="1"
                  className="responsive-img"
                  id="curve_border_top"
                />
              </div>
              <div className="card-content">
                <p>{announcements.title}</p>
              </div>
              <div className="card-action">
                <a href="#" style={{ color: "#BF2200" }}>
                  More Details
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    })
return (
<div className='popup' style={{'z-index':'100'}}>
<div className='popup_inner'>
<button onClick={this.props.closePopup}  style={{ "right":'5%', 'top': '15%', 'position':'fixed' }}
>
<i
                  className="material-icons"
                  style={{ "float":'none' }}
                >
                  close
                </i>
</button>
<div className="row ">
          {display_announcement}
</div>
</div>
</div>
);
}
}

export default Popup;
