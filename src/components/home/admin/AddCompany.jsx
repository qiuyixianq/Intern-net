import React, { useState } from 'react';
import { JobInput } from './JobInput';
const axios = require('axios').default;


const initialCompany = {
    name: '',
    website: '',
    size: '',
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
    const [jobArr, setJobArr] = useState([initialJob, initialJob]);

    const addJob = () => setJobArr([...jobArr,initialJob]);

    const handleRemoveJob = index => setJobArr(jobArr.filter((job,arrIndex) => arrIndex !== index));

    const handleSubmit = () => {
        //compile request object
        axios.post('http://localhost:4000/company', company);
    }

    return (
        <center>
            <form onSubmit={() => handleSubmit()} style={{ width: '50%', textAlign: 'left' }} className="addCompanyForm">

                <div className="mb-5">
                    <h5>Company Registration Form</h5>
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control mb-3" id="name" placeholder="Company Name" required />
                    <label htmlFor="website">Website</label>
                    <input type="text" className="form-control mb-3" id="website" placeholder="Company Website" required />

                    <p>Company Size</p>
                    <div className="d-flex justify-content-around mb-3">
                        <div>
                            <label htmlFor="sizeFrom" className="me-2">From</label>
                            <input type="number" id="sizeFrom" required />
                        </div>

                        <div>
                            <label htmlFor="sizeTo" className="me-2">To</label>
                            <input type="number" id="sizeTo" required />
                        </div>
                    </div>

                    <label htmlFor="type">Type</label>
                    <input type="text" className="form-control mb-3" id="type" placeholder="Company Type" required />

                    <label htmlFor="industry">Industry</label>
                    <input type="text" className="form-control mb-3" id="industry" placeholder="Company Industry" required />

                    <label htmlFor="location">Location</label>
                    <input type="text" className="form-control mb-3" id="location" placeholder="Company Location" required />

                    <div>
                        <p>Job <span role="button" onClick={() => addJob()}>add</span></p>
                        {jobArr.map((job, index) => <JobInput index={index} key={index} handleRemoveJob={() => handleRemoveJob(index)} />)}
                    </div>

                    <label htmlFor="imgsrc">Logo link</label>
                    <input type="text" className="form-control mb-3" id="imgsrc" placeholder="Company Logo URL" />
                </div>

            </form>
        </center>
    )
}