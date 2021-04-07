import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getUseCases } from '../redux/useCasesSlice'


function UseCases() {
    const cases = useSelector((state) => state.useCases.useCases);
    console.log(cases);
    // const dispatch = useDispatch();
    // dispatch(getUseCases())
    
    return (
        <div>the states:
           <h1><div>{JSON.stringify(cases)}</div></h1> 
        </div>
    )
}

export default UseCases
