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
         <div className="col s12 m4" id="bottom_margin">
           <div className="card-image">
              <img
                style={{ "background-size": "cover", margin: "auto" }}
                src={announcements.image}
                alt=""
                className="responsive-img mobile_space"
                id="curve_border"
              />
              </div>
            </div>
        </div>
      )
    })
return (  
<div className='popup' style={{'z-index':'100'}}>  
<div className='popup_inner'>  
<button onClick={this.props.closePopup} style={{ "right":'5%', 'top': '15%', 'position':'fixed' }}
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