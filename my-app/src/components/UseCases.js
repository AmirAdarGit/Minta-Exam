import React from 'react'
import { useDispatch } from "react-redux"
import { getUseCases } from '../redux/useCasesSlice'

function UseCases() {
    const dispatch = useDispatch();
    dispatch(getUseCases())
    
    return (
        <div>
            fatching the use cases from api...            
        </div>
    )
}

export default UseCases
