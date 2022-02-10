import React from 'react'


export const Gender = ({ numOfWomen, numOfMen }) => {
    return (
        <div className='d-flex justify-content-end w-75 m-auto px-4'>
            <span className='px-2 text-muted'>Male: {numOfMen}</span>
            <span className='text-muted'>Female: {numOfWomen}</span>
        </div>
    )
}
