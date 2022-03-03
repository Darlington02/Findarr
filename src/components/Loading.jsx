import React from 'react'
import {BallTriangle} from 'react-loader-spinner'

export const Loading = () => {
    return (
        <div className="flex justify-center items-center">
            <BallTriangle color="#00BFF" height={550} width={80} />
        </div>
    )
}
