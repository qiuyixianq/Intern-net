import React from 'react';


export const JobInput = props => {
    const { index, handleRemoveJob } = props;

    return (
        <div key={index} >
            <p>
                {`#${index + 1}`}
                <span className="ms-2" role="button" onClick={ () => handleRemoveJob(index)}>remove</span>
            </p>
            <label htmlFor={`job${index}Title`}>Job Title</label>
            <input type="text" className="form-control mb-3" id={`job${index}Title`} />

            <label htmlFor={`job${index}Desc`}>Job Description</label>
            <input type="text" className="form-control mb-3" id={`job${index}Desc`} />
        </div>
    )
}