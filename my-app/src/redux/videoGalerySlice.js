import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const videoGallerySlice = createSlice({
    name: 'videoGallery',
    initialState: {
      title: 'New in',
      previewImages: [{
          "url": "https://campaigns.withminta.com/2938/0000/pld934l2h133b3hb1o3051rb2ceg19d19h1f1p61v36266_image1.jpg"
        },
        {
          "url": "https://campaigns.withminta.com/2938/0000/twr358u6pd702bst190e52jmqu1b2i91tfh36t_image1.jpg"
        },
        {
          "url": "https://campaigns.withminta.com/2938/0000/tba31j1p9202y2y32omy2uxhpcm2s1blsqe_image1.jpg"
        },
        {
          "url": "https://campaigns.withminta.com/2938/0000/ug20jk2sw372p3i371j2i525hggte2623q2o2e2st1z1ee_image1.jpg"
        },
        {
          "url": "https://campaigns.withminta.com/2938/0000/4h734aa2u2m2b8bs18g0vpv3j31f5b81fi_image1.jpg"
        }
      ],
      status: null,
    },    
  
    
  })
  
  
  export default videoGallerySlice.reducer