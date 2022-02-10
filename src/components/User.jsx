import React from 'react'
import { hideEmail, isFemale, formatDate } from './UsersService';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import CakeSharpIcon from '@mui/icons-material/CakeSharp';
import { useState } from 'react'
import { Modal } from './Modal';


export const User = ({ user, grid }) => {

    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!showModal)
    }

    var classNames = require('classnames');

    var classes = classNames({

        'female': isFemale(user)
    })

    if (grid) {
        return < div className='container-fluid col m-2 d-flex justify-content-center' >
            <div className={`row border  grid ${classes}`}>
                <div className='p-0 grid-pic-container'><img className='grid-pic' src={user.picture.large} alt={user.name.first} />
                    <div className='grid-fullname'> {user.name.first} {user.name.last}</div>
                </div>
                <div>

                    <div> {hideEmail(user.email)}</div>
                    <div> Birth date: {formatDate(user.dob.date)}</div>
                </div>
            </div>
        </div >
    } else {
        return < div className='container-fluid' >
            <div className={`row w-75 border p-2 m-auto ${classes}`}>
                <div className='col-1 text-center'>
                    <img onClick={openModal} className='rounded-circle user-img' src={user.picture.thumbnail} alt={user.name.first} />
                </div>
                <div className='col-lg-5 col-sm-12 p-0'>
                    <div>{user.name.first} {user.name.last}</div>
                    <div> <EmailSharpIcon></EmailSharpIcon>{hideEmail(user.email)}</div>
                    <div> <CakeSharpIcon></CakeSharpIcon>{formatDate(user.dob.date)}</div>
                </div>
            </div>
            <Modal showModal={showModal} setShowModal={setShowModal} user={user}></Modal>
        </div >
    }
}
