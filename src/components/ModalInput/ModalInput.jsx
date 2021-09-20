import './ModalInput.scss';


const ModalInput = ({ onClick, onChange, onChangeCheckbox, value, checked, subgroupModal, currentIdParent }) => {

    const renderCheckbox = subgroupModal ? null : <><input className="form-check-input"
        type="checkbox"
        checked={checked}
        id="invalidCheck2"
        required
        onChange={onChangeCheckbox} />
        <label className="form-check-label" htmlFor="invalidCheck2">New group with subgroup</label></>

    const maxLengthInput = currentIdParent ? 10 : 20;
    return (<>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Add New Group</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <input type="text"
                            className="form-control"
                            value={value}
                            onChange={onChange}
                            maxLength={maxLengthInput}
                        />
                        {renderCheckbox}
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-primary"
                            data-bs-dismiss="modal"
                            onClick={onClick}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}

export default ModalInput;