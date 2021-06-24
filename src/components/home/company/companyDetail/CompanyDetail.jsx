import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDetail, setSelectedCompany } from './companyDetailSlice';

export const CompanyDetail = prop => {
    const dispatch = useDispatch();
    const { selectedCompany, showDetail } = useSelector(state => state.companyDetail);
    const { companyHeaderRef } = prop;

    //useState for window resize rerender
    const [windowX, setWindowX] = useState(window.innerWidth);

    //event func
    const closeDetail = () => {
        dispatch(setShowDetail(false));
        dispatch(setSelectedCompany({}));
    }

    //rerender on resize
    useEffect(() => {
        const handleResize = () => {
            setWindowX(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        //cleanup
        return () => window.removeEventListener('resize', handleResize);
    });


    //anim
    useEffect(() => {
        const t = gsap.timeline({ defaults: { ease: 'power4.out' } });
        t.fromTo('.companyDetail', { opacity: 0, x: '30%' }, { opacity: 0.95, x: '0%', duration: 1 })

        //go to top
        companyHeaderRef.current.scrollIntoView({ behavior: 'smooth' });
        //cleanup
        return () => t.kill();
    }, [selectedCompany, showDetail, companyHeaderRef]);




    //main render
    //desktop
    if (windowX >= 992) {
        return (
            <div className="companyDetail" >
                <h1>{selectedCompany.companyName}</h1>
            </div>
        )
    }
    //mobile
    else {
        //mobile show
        if (showDetail) {
            return (
                <div className="companyDetail">

                    <div className="btnCloseContainer">
                        <button type="button" className="btn-close btn-close-white" onClick={() => closeDetail()} aria-label="Close" ></button>
                    </div>

                    <div className="d-flex align-items-center">
                        <img className="companyLogo" src={selectedCompany.logo} alt="company logo" />
                        <h3 className="ms-2">{selectedCompany.companyName}</h3>
                    </div>

                    <div className="mt-4">
                        <h6>Website: <a href={selectedCompany.companyWebsite}>{selectedCompany.companyWebsite}</a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link" viewBox="0 0 16 16">
                                <path d="M6.354 5.5H4a3 3 0 0 0 0 6h3a3 3 0 0 0 2.83-4H9c-.086 0-.17.01-.25.031A2 2 0 0 1 7 10.5H4a2 2 0 1 1 0-4h1.535c.218-.376.495-.714.82-1z" />
                                <path d="M9 5.5a3 3 0 0 0-2.83 4h1.098A2 2 0 0 1 9 6.5h3a2 2 0 1 1 0 4h-1.535a4.02 4.02 0 0 1-.82 1H12a3 3 0 1 0 0-6H9z" />
                            </svg>
                        </h6>
                        <h6>Size: <span>{selectedCompany.companySize}</span></h6>
                        <h6>Type: <span>{selectedCompany.companyType}</span></h6>
                        <h6>Industry: <span>{selectedCompany.companyIndustry}</span></h6>
                        
                        <div className="jobDiv">
                            <h6>Job: </h6>
                            {selectedCompany.companyJob.map((job,index) => <p>{job.title}</p>)}
                        </div>
                    </div>

                </div>
            )
        }
        //mobile hide (<></> and react fragment returns bugs)
        else return (<div></div>)
    }
}