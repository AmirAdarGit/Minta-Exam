import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Image from "./Image"
import { galleryThunk } from '../redux/videoGalerySlice'
import  { useState, useEffect } from 'react'


function VideoGallery() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(galleryThunk());
    }, [])


    const videosGallery = useSelector((state) => state.videoGallery.previewImages);
    const title = useSelector((state) => state.videoGallery.title);
    console.log(`video gallery: ${videosGallery}`);
    return (

            <div className="video-gallery">
                <h1>{title}</h1>
                {/* {videosGallery.map((image, index) => (
                    <div key={index}>
                    {(index % 3 === 0) && 
                        <ol/>
                    }
                        {console.log(index)}
                        <Image image={image.url}/>
                    </div> ))} */}
            </div>
    )
}

export default VideoGallery

