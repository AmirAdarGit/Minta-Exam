import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import  { MenuList, MenuItem } from '@material-ui/core'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import  { useEffect } from 'react'
import { clickOnUseCase } from '../../actions/clickOnUsCase.thunk'
import { init } from '../../actions/init.thunk'

function UseCases() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(init());
    }, [])
   
    const cases = useSelector((state) => state.useCases.useCases);
    const fatchGalleryByCampaignId = (useCaseName) => {
        dispatch(clickOnUseCase(useCaseName.campaignId));
    }

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
