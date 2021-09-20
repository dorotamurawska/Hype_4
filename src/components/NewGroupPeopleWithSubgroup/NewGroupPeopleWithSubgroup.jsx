import React from 'react';
import NewSubgroup from '../NewSubgroup/NewSubgroup';
import './NewGroupPeopleWithSubgroup.scss';


const NewGroupPeopleWithSubgroup = ({ title, id, children, handleRemoveBtn, handleChangeModal }) => {

    const addNewSubgroupPeople = () => {
        return children.map(child => {
            return <NewSubgroup parentId={child.parentId} idChild={child.idChild} key={child.idChild} title={child.title} handleRemoveBtn={handleRemoveBtn} />
        })
    };

    const renderNewSubgroupPeople = children.length ? addNewSubgroupPeople() : null;

    return (
        <div className="row-new-group">
            <div className="wrap-new-group">
                <div className='txt-and'>And</div>
                <div className='vertical-line'></div>
                <div className='horizontal-line'></div>
                <div className='group-name-with-subgroup'>
                    <div className="shape"></div>
                    <div className="col">
                        <div className="row-group-name-with-subgroup">
                            <p className='content'>{title}</p>
                            <button
                                className='btn-subtract'
                                onClick={handleRemoveBtn}
                                id={id}>-</button>
                        </div>
                        {renderNewSubgroupPeople}
                        <div className="row-btn-add-sm">
                            <button
                                className='btn-add-sm'
                                data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                data-parent-id={id}
                                onClick={(e) => handleChangeModal(true, e.currentTarget.dataset.parentId)}
                            >+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewGroupPeopleWithSubgroup;