import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios' 


const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;

    export const galleryThunk = createAsyncThunk (
        'CLICK_ON_USE_CASE/galleryThunk',
        async (campaignId) => {

            const { data }  = await axios.get(`https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignId}&offset=0&limit=6&applicationSource=web`)
        
            console.log("recived data from api", data);  
            return data;
        }
    )
