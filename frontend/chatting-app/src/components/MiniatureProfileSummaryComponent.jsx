import React from 'react'


export default function MiniatureProfileSummary() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <img src="images/man.png" className='fotoRedes profile-image center-block' alt="fb" />  
          </div>                     
          <div class="row justify-content-center">
            Username    
          </div>    
          <div class="row justify-content-center">
            <span class="fa-stack fa-2x">
                <i class="fa fa-circle fa-stack-2x"></i>
                <i class="fa fa-cogs fa-stack-1x fa-inverse"></i>
            </span>
          </div>
        </div>
    )    
}


