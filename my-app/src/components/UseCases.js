import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import  { MenuList, MenuItem } from '@material-ui/core'
import { sizing } from '@material-ui/system';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import  { changeUseCase, changeCampaignId }  from '../redux/useCasesSlice'
import { initThunk } from '../actions/init-thunk'
import  { useEffect } from 'react'
import { galleryThunk } from '../actions/gallery-thunk'
import VideoGallery from './VideoGallery';
import { INIT, CLICK_ON_USE_CASE } from "../actions/actions"

function UseCases() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(initThunk());
    }, [])

    const cases = useSelector((state) => state.INIT.useCases);

    // useEffect(() => {
    //     dispatch(galleryThunk());
    // },[])

    // const firstSelectedUseCase = useSelector((state) => state.INIT.selectedUseCase);


    const fatchGalleryByCampaignId = (useCaseName) => {

    console.log("The user case thas sellected is: ", useCaseName.name);
    console.log("The campain is: ", useCaseName.campaignId);
    
    dispatch(galleryThunk(useCaseName.campaignId));
    // dispatch(changeCampaignId(useCaseName.campaignId))
    // dispatch(galleryThunk());

}

    console.log(`Use Cases: ${JSON.stringify(cases)}`);
    // console.log('Selected Case ',firstSelectedUseCase);

    return (
        <div>
            <div className="use-cases">
                <ThemeProvider theme={theme}>
                    <MenuList >
                        {cases.map((useCase, index) => (
                            <div key={index}>
                                <MenuItem onClick={() => {fatchGalleryByCampaignId(useCase)}}>{useCase.name}</MenuItem>
             
                            </div>
                        ))}
                    </MenuList>
                </ThemeProvider>
            </div>
        </div>
    )
}


const theme = createMuiTheme({
  overrides: {
    MuiList: {
      root:{
        width: '150px'
        }
    }
  }
});
export default UseCases
