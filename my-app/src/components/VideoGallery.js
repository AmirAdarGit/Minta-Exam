import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Image from "./Image"

function VideoGallery() {
    const cases = useSelector((state) => state.useCases.useCases);
    const videosGallery = useSelector((state) => state.videoGallery.previewImages);
    console.log(`video gallery: ${videosGallery}`);
    return (
        
        <div className="video-gallery">
            <h1>{cases.name}</h1>
        
            {videosGallery.map((image, index) => (
                <div key={index}>
                    <Image image={image.url}/>
                </div>
        ))}
        </div>
    )
}

export default VideoGallery

