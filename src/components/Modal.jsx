import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring'
import { useRef, useEffect } from 'react';


export const Modal = ({ showModal, setShowModal, user }) => {

    const modalRef = useRef();

    useEffect(() => {
        let handler = (event) => {
            if (modalRef.current === event.target) {
                setShowModal(false)
            }
        }
        document.addEventListener('mousedown', handler)

        return () => {
            document.removeEventListener('mousedown', handler)
        }
    })


    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(100%)` : `translateY(0%)`
    })
    return (<>
        {showModal ?
            (<div className='modal-background' ref={modalRef}>
                <animated.div style={animation}>
                    <div className='modal-wrapper'>
                        <div className='info-page'>
                            <h1>About me</h1>
                            <p>My name is {user.name.first} {user.name.last}</p>
                            <p>I am from {user.location.city} in {user.location.country}</p>
                            <p>My phone number is {user.phone}</p>
                        </div>
                        <button onClick={() => setShowModal(!showModal)} className='close-modal'><CloseIcon></CloseIcon></button>
                    </div>
                </animated.div>
            </div>)
            : null}
    </>
    );
};
