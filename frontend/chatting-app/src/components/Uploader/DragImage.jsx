import React, { useState, useRef, useEffect } from 'react'
import './dragImage.scss'
import useFirestore from '../../Hooks/useFirestore';


export const DragImage = ({setMedia, setLoading}) => {

    const [error, setError] = useState(null);
    const [messageError, setMessageError] = useState('');
    const [classDrag, setClassDrag] = useState('drag__image');
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);

    const typeImages = ['image/png', 'image/jpeg', 'image/jpg'];

    const refInputFile = useRef(null);

    const selectImage = () => {
        refInputFile.current.click()
    }

    const isImageValid = (file) => {
        if(file && typeImages.includes(file.type)){
            setError(false);
            return true;
        }else{
            setError(true)
            setMessageError('File is incorrect');
            setImage('')
            return false
        }
    }

    const showImage = (file) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.addEventListener('load', (e) => {
            setImage(e.target.result);
        })
        setFile(file);
        // save file for share to the father
        setMedia(file)
    }

    const upLoadImage = (e) =>{
        const files = e.target.files;
        const file = files[0];

        const valid = isImageValid(file)

        if(valid){
            showImage(file)
        }else{
            setFile(null)
        }

        showImage(file);
        
    }

    const addImage = (e) => {
        e.preventDefault()

        refInputFile.current.files = e.dataTransfer.files
        const file = refInputFile.current.files[0]

        const valid = isImageValid(file)

        if(valid){
            showImage(file)
        }else{
            setError(true)
            setMessageError('File is incorrect');
            return false
        }

        showImage(file);
    }

    const handleSave = () => {
        const valid = isImageValid(file)

        if (valid && file){
            setLoading(true);
        } else{
            setError(true)
            setMessageError('First, upload an image')
        }

    }


    // const { docs } = useFirestore('images');
    // console.log(docs)

    useEffect(() => {

        setTimeout(() => {
            setError(false)
        }, 5000)      
    },[error])

    return (
        <div className='drag'>
            <h2 className='drag__title'>Upload your image</h2>
            <div className='drag__info'>File shoul be JPEG or PNG</div>

            {error && <div className='drag__message'>{messageError}</div>}

            <input type='file' name='file' ref={refInputFile} onChange={upLoadImage}/>
            <div 
                className={classDrag} onDragOver={(e) => 
                {e.preventDefault()
                setClassDrag('drag__image active')}}
                
                onDragLeave={(e) => 
                    {e.preventDefault()
                    setClassDrag('drag__image')}}
                    
                onClick={selectImage}

                onDrop={addImage}

                >

                <img src={image} alt='' className='graf__image--preview'/>
                <span className='drag__image--message'>
                    Click or Drag & Drop your image here.
                </span>
            </div>

            <button className='drag__action' onClick={handleSave}>Save image</button>

        </div>
    )
}
