import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import Image from "./Image"
import { galleryThunk } from '../actions/gallery-thunk'
import  { useState, useEffect } from 'react'
import { fatchGalleryByCampainIdThunk } from '../actions/gallery-thunk'


function VideoGallery(props) {

    // const videosGallery = useSelector((state) => state.videoGallery.previewImages);
    // const title = useSelector((state) => state.videoGallery.title);
    //const campaignId = useSelector((state) => state.videoGallery.title);

    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(fatchGalleryByCampainIdThunk(props.campaignId));
    // }, [])

    // console.log(`props: ${JSON.stringify(props.campaignID)}`);
    console.log("here");

    // console.log(`video gallery: ${videosGallery}`);
    return (

            <div className="video-gallery">
                {/* <h1>{title}</h1> */}
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

