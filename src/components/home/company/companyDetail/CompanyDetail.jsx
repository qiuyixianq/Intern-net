import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDetail, setSelectedCompany } from './companyDetailSlice';
import { updateUser } from '../../../authentication/tokenSlice';
const axios = require('axios').default;

export const CompanyDetail = () => {
    const dispatch = useDispatch();
    const { selectedCompany, showDetail } = useSelector(state => state.companyDetail);
    const { user } = useSelector(state => state.authentication);

    //useState for window resize rerender
    const [windowX, setWindowX] = useState(window.innerWidth);

    //event func
    const closeDetail = () => {
        dispatch(setShowDetail(false));
        dispatch(setSelectedCompany({}));
    }

    const saveJob = async (companyName, jobTitle) => {
        try {
            const result = await axios.put('http://localhost:4000/profile', { username: user.username, companyName, jobTitle });
            const updatedUser = result.data;
            dispatch(updateUser(updatedUser));
        }
        catch (err) { console.log(err) }
    }


    //Side effect
    //rerender on resize
    useEffect(() => {
        const handleResize = () => setWindowX(window.innerWidth);
        window.addEventListener('resize', handleResize);

        //cleanup
        return () => window.removeEventListener('resize', handleResize);
    });


    //anim
    useEffect(() => {
        const t = gsap.timeline({ defaults: { ease: 'power4.out' } });
        t.fromTo('.companyDetail', { opacity: 0, x: '30%' }, { opacity: 0.95, x: '0%', duration: 1 })

        //cleanup
        return () => t.kill();
    }, [selectedCompany, showDetail]);

    //render apply button
    const renderSavePill = (company, jobTitle) => {
        //get user info from store and determine if saved
        const savedCompany = user.savedJob.find(el => el.company === company);
        //has saved in selectedCompany
        if (savedCompany) {
            //identify which job saved
            if (savedCompany.job.find(job => job === jobTitle)) {
                //render saved
                return (
                    <span role="button" onClick={() => saveJob(company, jobTitle)} className="favButton" >

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                        </svg>
                    </span>
                )
            }

        }
        return (
            <span role="button" onClick={() => saveJob(company, jobTitle)} className="favButton" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
            </span>
        )
    }


    //render company detail content 
    const renderDetail = () => {
        return (
            <main className="companyDetail">

                {/*Close Button (only for mobile)*/}
                <div className="btnCloseContainer">
                    <button type="button" className="btn-close btn-close-white" onClick={() => closeDetail()} aria-label="Close" ></button>
                </div>

                {/*Company Header*/}
                <header className="d-flex align-items-center">
                    <img className="companyLogo" src={selectedCompany.logo} alt="company logo" />
                    <h3 className="ms-2">{selectedCompany.companyName}</h3>
                </header>

                {/*Company Detail*/}
                <div className="mt-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <h6>Website:</h6>
                        <h6>
                            <a href={`https://${selectedCompany.companyWebsite}`} target="_blank" rel="noreferrer" >
                                {selectedCompany.companyWebsite}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-link" viewBox="0 0 16 16">
                                    <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                    <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                                </svg>
                            </a>
                        </h6>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-people" viewBox="0 0 16 16">
                                <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                            </svg>
                            <span> Size: </span>
                        </h6>
                        <h6>{selectedCompany.companySize}</h6>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-diagram-3" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                            </svg>
                            <span> Type: </span>

                        </h6>
                        <h6>{selectedCompany.companyType}</h6>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" />
                                <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z" />
                            </svg>
                            <span> Industry: </span>
                        </h6>
                        <h6>{selectedCompany.companyIndustry}</h6>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            <span> Location: </span>
                        </h6>
                        <h6>{selectedCompany.companyLocation}</h6>
                    </div>

                    {/*Company Job*/}
                    <section className="jobCardContainer">
                        <br />
                        <h6>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-briefcase" viewBox="0 0 16 16">
                                <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z" />
                            </svg> Job:
                        </h6>
                        {selectedCompany.companyJob.map((job, index) => {
                            return (
                                <div className="jobCard" key={index}>
                                    <div className="d-flex align-items-baseline justify-content-between">
                                        <div className="d-flex align-items-baseline">
                                            <h5>{index + 1}</h5>
                                            <h5 className="ms-2">{job.title}</h5>
                                        </div>
                                        {renderSavePill(selectedCompany.companyName, job.title)}
                                    </div>

                                    <p>Description: <span>{job.description}</span></p>
                                </div>
                            )
                        })}
                    </section>
                </div>
            </main>
        )
    }


    //main render
    //desktop
    if (windowX >= 992) {
        //selectedCompany obj not null
        if (Object.keys(selectedCompany).length !== 0) return renderDetail();
        //nothing selected
        else return (
            <div className="companyDetail text-center d-flex justify-content-center align-items-center">
                <div>
                    <h4>Select a company</h4>
                    <img src="/img/CompanyDetail/select.svg" alt="select illustration" width="35%" />
                </div>
            </div>
        )
    }
    //mobile
    else {
        //mobile show
        if (showDetail) return renderDetail();
        //mobile hide (<></> and react fragment returns bugs)
        else return (<div></div>)
    }
}