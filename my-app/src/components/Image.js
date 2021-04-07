import React from 'react'

function Image(props) {
    return (
        <div>
          {<img src={props.image} height={200} width={200}/>}
        </div>
    )
}

export default Image
