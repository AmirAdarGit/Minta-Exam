import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Image from "../Image"
import { clickOnUseCase } from '../../actions/clickOnUsCase.thunk'
import  { useState, useEffect } from 'react'
import { fatchGalleryByCampainIdThunk } from '../../actions/clickOnUsCase.thunk'


function VideoGallery(props) {
    const videos = useSelector((state) => state.videoGallery.videos);
    const title = useSelector((state) => state.useCases.selectedUseCase);

    return (
            <div className="video-gallery">
                <h1>{title}</h1>
                { videos.map((video, index) => (
                    <div key={index}>
                        { (index % 3 === 0) && <ol/> }
                        <Image image={video.previewImageUrl}/>
                    </div> )) }
            </div> 
    )
}

export default VideoGallery

