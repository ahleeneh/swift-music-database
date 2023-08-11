import React from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

function Modal({ isOpen, onClose, children }) {


    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">

                <button className="close-button" onClick={onClose}>
                    <CloseRoundedIcon />
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;