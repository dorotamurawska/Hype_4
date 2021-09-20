import React from 'react';
import './NewGroupPeople.scss';


const NewGroupPeople = ({ title, id, handleRemoveBtn }) => {
    return (
        <div className="row-new-group">
            <div className="wrap-new-group">
                <div className='txt-and'>And</div>
                <div className='vertical-line'></div>
                <div className='horizontal-line'></div>
                <div className='group-name'>
                    <div className="shape"></div>
                    <p className='content'>{title}</p>
                    <button
                        className='btn-subtract'
                        onClick={handleRemoveBtn}
                        id={id}>-</button>
                </div>
            </div>
        </div>
    );
}

export default NewGroupPeople;