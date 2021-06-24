import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useDispatch, useSelector } from 'react-redux';
import { setShowDetail } from './companyDetailSlice';

export const CompanyDetail = prop => {
    const dispatch = useDispatch();
    const { selectedCompany, showDetail } = useSelector(state => state.companyDetail);
    const { companyHeaderRef } = prop;

    //useState for window resize rerender
    const [windowX, setWindowX] = useState(window.innerWidth);

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
        t.fromTo('.companyDetail', { opacity: 0, x: '30%' }, { opacity: 0.5, x: '0%', duration: 1 })

        //go to top
        companyHeaderRef.current.scrollIntoView({ behavior: 'smooth' });
        //cleanup
        return () => t.kill();
    }, [selectedCompany, showDetail]);

    const closeDetail = () => dispatch(setShowDetail(false));


    //main render
    //desktop
    if (window.innerWidth >= 992) {
        return (
            <div className="companyDetail" >
                <h1>Name</h1>
            </div>
        )
    }
    //mobile
    else {
        if (showDetail) {
            return (
                <div className="companyDetail">
                    <button onClick={() => closeDetail()}>close</button>
                </div>
            )
        }
        else {
            return (
                <div>
                    
                </div>
            )
        }
    }
}