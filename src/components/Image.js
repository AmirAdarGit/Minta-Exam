import React from 'react'
import '../style/gallery.css';

function Image(props) {
    return (
        <div>
          <div className="gallery">
              <img src={props.image} width={226} height={228}/>
          </div>
        </div>
    )
}

export default Image
