import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import  axios from 'axios' 
import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store';


const AUTH_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTg0OGQ2YWU1MWMwNzQ5ODRhYTdlYjEiLCJyb2xlcyI6WyJ1c2VyIl0sImlhdCI6MTU4NTc0NTI1OSwiZXhwIjoxNTg1ODMxNjU5fQ.S61K8RkHJ6qwxRjp9m2Pfvttd6hRBOyWRO3TimRkJA4'
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// const campaignId =  useSelector(state => state.useCases.selectedCampaignId);
// const campaignId =  '5f3939123ff97900220b0198'

    export const galleryThunk = createAsyncThunk (
        'CLICK_ON_USE_CASE/galleryThunk',
        async (campaignId) => {
            console.log("the campaignId is",campaignId);
            // console.log("the campeign id", useSelector(state => state.useCases.selectedCampaignId));
            const { data }  = await axios.get(`https://dev.withminta.com/generate-video/videos/findByCampaign?campaignId=${campaignId}&offset=0&limit=6&applicationSource=web`)
        
            console.log("recived data from api", data);  
            return data;
        }
    )
