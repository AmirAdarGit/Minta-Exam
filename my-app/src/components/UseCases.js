import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import  { MenuList, MenuItem } from '@material-ui/core'
import { sizing } from '@material-ui/system';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
function UseCases() {
    const cases = useSelector((state) => state.useCases.useCases);
    console.log(`Use Cases: ${cases}`);



    return (
        <div>
            <h1 style={{float: "left", fontSize: "20px"}}>Mints</h1>
            <div className="use-cases">
                <ThemeProvider theme={theme}>
                    <MenuList>
                        {cases.map((useCase, index) => (
                            <div key={index}>
                                <MenuItem >{useCase.name}</MenuItem>
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
