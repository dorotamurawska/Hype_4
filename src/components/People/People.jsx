import React, { useState } from 'react';
import AddBtn from '../AddBtn/AddBtn';
import NewGroupPeople from '../NewGroupPeople/NewGroupPeople';
import NewGroupPeopleWithSubgroup from '../NewGroupPeopleWithSubgroup/NewGroupPeopleWithSubgroup';
import PeopleBtn from '../PeopleBtn/PeopleBtn';
import ModalInput from '../ModalInput/ModalInput';

import './People.scss';

const People = () => {
    const [inputValue, setInputValue] = useState('');
    const [checkboxValue, setcheckboxValue] = useState(false);
    const [currentIdParent, setCurrentUdParent] = useState(null);
    const [subgroupModal, setSubgroupModal] = useState(true);
    const [newId, getNewId] = useState(4);
    const [newIdChild, setNewIdChild] = useState(3);
    const [newGroupPeople, setNewGroupPeople] = useState([{ id: 1, title: 'Age 40+', subgroup: false }, { id: 2, title: 'Ethnicity', subgroup: true, children: [{ parentId: 2, idChild: 1, title: 'Black' }, { parentId: 2, idChild: 2, title: 'Hispanic' }] }, { id: 3, title: 'Income yearly 45k USD+', subgroup: false }]);

    const handleOnChangeCheckbox = (e) => {
        setcheckboxValue(e.target.checked);
    };
    const handleOnChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleChangeModal = (isSubgroupModal, id) => {
        setSubgroupModal(isSubgroupModal);
        setCurrentUdParent(id);
        console.log(id)
    };

    const handleRemoveBtn = (e) => {
        console.log(currentIdParent)
        if (e.currentTarget.dataset.parentId) {
            const parentIdBtn = parseInt(e.currentTarget.dataset.parentId);
            const idBtn = parseInt(e.currentTarget.id);
            const parentGroupIndexFromArray = newGroupPeople.findIndex(item => item.id === parentIdBtn);
            const elementIndexFromArray = newGroupPeople[parentGroupIndexFromArray].children.findIndex(item => item.idChild === idBtn);
            const newArray = [...newGroupPeople];
            newArray[parentGroupIndexFromArray].children.splice(elementIndexFromArray, 1);
            return setNewGroupPeople(newArray);
        } else {
            const idBtn = parseInt(e.currentTarget.id);
            return setNewGroupPeople(newGroupPeople.filter(item => item.id !== idBtn));
        }

    };

    const handleAddBtn = () => {
        if (currentIdParent) {
            const idChild = newIdChild;
            const parentGroupIndexFromArray = newGroupPeople.findIndex(item => item.id === parseInt(currentIdParent));
            const newArray = [...newGroupPeople];
            newArray[parentGroupIndexFromArray].children.push({ parentId: currentIdParent, idChild: idChild, title: inputValue });
            setNewIdChild(idChild + 1);
            setNewGroupPeople(newArray);
        } else {
            if (checkboxValue) {
                setNewGroupPeople([...newGroupPeople, { id: newId, title: inputValue, subgroup: checkboxValue, children: [] }]);
            } else {
                setNewGroupPeople([...newGroupPeople, { id: newId, title: inputValue, subgroup: checkboxValue }]);
            }
            getNewId(newId + 1);
            setcheckboxValue(false);
        }
        setInputValue('');
    }

    const addNewGroupPeople = () => {

        return newGroupPeople.map(content => {
            if (!content.subgroup) {
                return < NewGroupPeople id={content.id} key={content.id} title={content.title} newGroupPeople={newGroupPeople} setNewGroupPeople={setNewGroupPeople} handleRemoveBtn={handleRemoveBtn} />
            }
            else {
                return < NewGroupPeopleWithSubgroup id={content.id} key={content.id} title={content.title} children={content.children} newGroupPeople={newGroupPeople} setNewGroupPeople={setNewGroupPeople} handleRemoveBtn={handleRemoveBtn} handleChangeModal={handleChangeModal} />
            }
        }
        )
    }

    const renderNewGroupPeople = newGroupPeople.length ? addNewGroupPeople() : null;

    return (<>
        <ModalInput onClick={handleAddBtn} onChange={handleOnChangeInput} onChangeCheckbox={handleOnChangeCheckbox} value={inputValue} checked={checkboxValue} subgroupModal={subgroupModal} currentIdParent={currentIdParent}/>
        <div className='main-rectangle'>
            <div className="wrap">
                <PeopleBtn />
                {renderNewGroupPeople}
                <AddBtn handleChangeModal={handleChangeModal} />
            </div>
        </div>
    </>
    );
}

export default People;