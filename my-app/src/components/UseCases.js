import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import  { MenuList, MenuItem } from '@material-ui/core'

function UseCases() {
    const cases = useSelector((state) => state.useCases.useCases);
    console.log(`Use Cases: ${cases}`);



    return (
        <div className="use-cases">
            <MenuList>
                {cases.map((useCase, index) => (
                    <div key={index}>
                        <MenuItem>{useCase.name}</MenuItem>
                    </div>
                
                ))}
            </MenuList>
      </div>
    )
}

export default UseCases
