import React, { useState } from 'react';
import { JobInput } from './JobInput';
const axios = require('axios').default;


const initialCompany = {
    name: '',
    website: '',
    sizeFrom: '',
    sizeTo: '',
    type: '',
    industry: '',
    location: '',
    job: [],
    imgsrc: ''
}

const initialJob = {
    title: '',
    description: ''
}

export const AddCompany = () => {
    const [company, setCompany] = useState(initialCompany);
    const [jobArr, setJobArr] = useState([{...initialJob}, {...initialJob}]);

    const addJob = () => setJobArr([...jobArr,initialJob]);

    const handleRemoveJob = index => setJobArr(jobArr.filter((job,arrIndex) => arrIndex !== index));

    //Company Basic info changes
    const handleChange = el => {
        const { id, value } = el.target;
        setCompany({...company, [id]: value});
    }

    //JobInput.jsx changes
    const handleJobChange = el => {
        const { dataset } = el.target;
        const tempJobArr = [...jobArr];
        tempJobArr[dataset.index][dataset.field] = el.target.value;
        setJobArr(tempJobArr);
    }

    const handleSubmit = () => {
        //compile request object
        const reqObj = {...company};
        reqObj.job = jobArr;

        axios.post('http://localhost:4000/company', reqObj);
    }

    return (
        <center>
            <form onSubmit={() => handleSubmit()} style={{ width: '50%', textAlign: 'left' }} className="addCompanyForm">

                <div className="mb-5">
                    <h5>Company Registration Form</h5>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control mb-3" id="name" placeholder="Company Name" onChange={ el => handleChange(el)} required />

                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control mb-3" id="website" placeholder="Company Website" onChange={ el => handleChange(el)} required />

                    <p>Company Size</p>
                    <div className="d-flex justify-content-around mb-3">
                        <div>
                            <label htmlFor="sizeFrom" className="me-2">From</label>
                            <input type="number" id="sizeFrom" onChange={ el => handleChange(el)} required />
                        </div>

                        <div>
                            <label htmlFor="sizeTo" className="me-2">To</label>
                            <input type="number" id="sizeTo" onChange={ el => handleChange(el)} required />
                        </div>
                    </div>

                    <label htmlFor="type">Type</label>
                    <input type="text" className="form-control mb-3" id="type" placeholder="Company Type" onChange={ el => handleChange(el)} required />

                    <label htmlFor="industry">Industry</label>
                    <input type="text" className="form-control mb-3" id="industry" placeholder="Company Industry" onChange={ el => handleChange(el)} required />

                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control mb-3" id="location" placeholder="Company Location" onChange={ el => handleChange(el)} required />

                    <div>
                        <p>Job <span role="button" onClick={() => addJob()}>add</span></p>
                        {jobArr.map((job, index) => <JobInput index={index} key={index} handleRemoveJob={() => handleRemoveJob(index)} onChange={ el => handleJobChange(el)} />)}
                    </div>

                    <label htmlFor="imgsrc">Logo link</label>
                    <input type="text" className="form-control mb-3" id="imgsrc" placeholder="Company Logo URL" onChange={ el => handleChange(el)} />

                    <input type="submit" className="btn btn-info" />
                </div>

            </form>
        </center>
    )
}