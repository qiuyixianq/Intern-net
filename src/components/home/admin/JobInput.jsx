import React from 'react';


export const JobInput = props => {
    const { index, handleRemoveJob, onChange } = props;

    return (
        <div key={index} >
            <p>
                {`#${index + 1}`}
                <span className="ms-2 badge bg-danger" role="button" onClick={ () => handleRemoveJob(index)}>remove</span>
            </p>
            <label htmlFor={`job${index}Title`}>Job Title</label>
            <input type="text" className="form-control mb-3" id={`job${index}Title`} data-index={index} data-field='title' onChange={el => onChange(el)} required />

            <label htmlFor={`job${index}Desc`}>Job Description</label>
            <input type="text" className="form-control mb-3" id={`job${index}Desc`} data-index={index} data-field='description' onChange={el => onChange(el)} required />
        </div>
    )
}