import React from 'react';
import './AddBtn.scss';


const AddBtn = ({ handleChangeModal }) => {
    return (
        <div className="row-btn-add">
            <div className='wrap-big-btn-add'>
                <button className='big-btn-add'
                    data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                    onClick={() => handleChangeModal(false)}>+</button>
            </div>
        </div>
    );
}

export default AddBtn;