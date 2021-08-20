import React, {useState, useEffect} from 'react'
import { DragImage } from './DragImage';
import { LoaderImage } from './LoaderImage';
import useStorage from '../../Hooks/useStorage'

export const Uploader = (props) => {
    const [loading, setLoading] = useState(false);
    const [file, setFile] = useState(null);

    const [valueURL, setUrl] = useState(null);

    useEffect(() =>{
        if(valueURL){
            props.setUrl(valueURL)      
        }
    },[valueURL])

    return(
        <section className="uploader">
            {loading ? (<LoaderImage file={file} setFile={setFile} setUrl={setUrl} setLoading={setLoading} />)
            :
            (<DragImage setMedia={setFile} setLoading={setLoading}/>)}
        </section>
    )
}
