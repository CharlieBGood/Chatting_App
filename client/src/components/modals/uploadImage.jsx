import React, {Component} from 'react';
import { Uploader } from '../Uploader/Uploader';
import firebase from 'firebase';

class FileUpload extends Component {
    constructor(){
        super();
        this.state = {
            uploadValue: 0
        };
    }

    render(){
        return(
            <div>
                <Uploader/>
            </div>
        )
    }

}