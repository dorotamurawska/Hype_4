import React from 'react';
import './NewSubgroup.scss';

const NewSubgroup = ({ title, idChild, parentId, handleRemoveBtn }) => {
    return (
        <div className="wrap-subgroup">
            <div className="row-new-subgroup">
                <div className="wrap-new-group" >
                    <div className='txt-or'>Or</div>
                    <div className='vertical-line-subgroup'></div>
                    <div className='horizontal-line-subgroup'></div>
                    <div className="row-subgroup">
                        <p className='content'>{title}</p>
                        <button
                            className='btn-subtract'
                            id={idChild}
                            data-parent-id={parentId}
                            onClick={handleRemoveBtn}>-</button>
                    </div>
                </div>
            </div>
        </div >

    );
}

export default NewSubgroup;