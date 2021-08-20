import React, {useEffect} from 'react'
import { motion } from 'framer-motion'
import useStorage from '../../Hooks/useStorage'
import './LoaderImage.scss'

export const LoaderImage = ({file, setFile, setLoading, setUrl }) => {
    
    const {url, progress} = useStorage(file)

    useEffect(() =>{
        if(url){
            setFile(null)
            setLoading(false)
            setUrl(url)
        }
    },[url, setFile, setLoading])
    
    return (

        <div className="loader">
            <h3 className="loader__title"> Uploading... </h3>

            <div className="loader__progress">
                <motion.div initial={{width: 0}} 
                animate={{width:progress + '%'}}
                className="loader__progress--bar"></motion.div>
            </div>
        </div>

    )
    
}
