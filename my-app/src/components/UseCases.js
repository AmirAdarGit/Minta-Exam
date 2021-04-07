import React from 'react'
import { useDispatch, useSelector } from "react-redux"


function UseCases() {
    const cases = useSelector((state) => state.useCases.useCases);
    console.log(`Use Cases: ${cases}`);



    return (
        <div className="use-cases">
            {cases.map((useCase, index) => (
                <div key={index}>
                    <h3>{useCase.name}</h3>
                </div>
        ))}
      </div>
    )
}

export default UseCases
