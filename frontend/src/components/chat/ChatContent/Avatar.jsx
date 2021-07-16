import React from 'react'

const Avatar = (props) => {
    return ( 
        <div className="avatar">
            <div className="avatar-img ">
              <img src={props.image} />
              <p>{props.name}</p>
          </div>

        </div>
          
     );
}
 
export default Avatar;