import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export const LandingPage = () => {
    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

        tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
        tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
        tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
        tl.to(".content-main", { opacity: "100%", duration: 0.4});
    }, []);

    return (
        <div className="whit">

            <section className="introAnim">
            <div className="intro">
                <div className="intro-text">
                    <h1 className="hide">
                        <span className="text">Find Your</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text">Dream Job At</span>
                    </h1>
                    <h1 className="hide">
                        <span className="text text-logo">Intern-net</span>
                    </h1>
                </div>
            </div>
            <div className="slider"></div>
            </section>

            <main className="content-main">
                <section>
                    <div className="header_section">
                        <div id="home">
                            <nav className="navbar navbar-transparent bg-transparent">
                                <div className="container">
                                    <a className=" navbar-brand gradient_text"
                                        href="https://www.youtube.com/watch?v=hzOFmlwypFo&t=225s&ab_channel=%EA%B5%90%EA%B4%91TV">
                                        Intern-net
                                    </a>

                                    <ul className="nav nav_color justify-content-end">
                                        <li className="nav-item scroll-to-section">
                                            <a className="nav-link active" aria-current="page" href="#home">HOME </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">INTERNSHIP PROGRAM</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">TESTIMONIALS</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">COMPANIES</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">SOCIAL TEAM</a>
                                        </li>
                                    </ul>
                                    <ul className="nav nav_color top-button-section">
                                        <li>
                                            <Link to="/login">
                                                <a className="login-bt nav" aria-current="page" href="/" >LOGIN</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/registration">
                                                <a className="login-bt nav" aria-current="page" href="/" >SIGN UP</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>

                            <div className="row">
                                <div className="banner-section layout_padding">
                                    <section>
                                        <div id="main_slider" className="section carousel slide banner-main" data-ride="carousel">
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <div className="container">
                                                        <div className="row marginii">
                                                            <div className="col-md-5 col-sm-12">
                                                                <h1 className="banner_taital">Best Internship Experience</h1>
                                                                <p className="lorem_text">The Intern-Net aims to give the best
                                                                    internship experience for interns to experience in joining
                                                                    different projects with different people.</p>
                                                                <div className="ads_bt">
                                                                    <Link to="registration" >
                                                                        <span>Get Started</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-7 col-sm-12">
                                                                <div className="img-box">
                                                                    <figure><img src="/img/Landing/int.png" alt="illustration" style={{ width: "100%" }} /></figure>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section>
                    <div className="company-section">
                        <div id="testimonial">
                            <div className="container">

                                <div className="mgb-40 padb-30 auto-invert line-b-4">
                                    <h1 className="unify-heading fg-text-d lts-md fs-300 fs-300-xs no-mg" contenteditable="false">
                                        TESTIMONIALS</h1>
                                </div>
                                <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                                    <li>
                                        <img src="/img/Landing/kyo.jpg" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false"
                                            data-editor="field"
                                            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                        <p className="fs-110 font-cond-l" contenteditable="false">"This is my first time doing my
                                            internship program, at frist i was scared but it is actually fun!"</p>
                                        <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Kyo Sohma</h5>
                                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Postgraduate
                                            in Marketing | UOW KDU UNIVERSITY</small>
                                    </li>
                                    <li>
                                        <img src="/img/Landing/gojo.jpg" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false"
                                            data-editor="field"
                                            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                        <p className="fs-110 font-cond-l" contenteditable="false">" Internship was a very exciting
                                            challenge for me, there is alot to learn."</p>
                                        <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Gojo Satoru</h5>
                                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Postgraduate
                                            in Computing | UOW KDU UNIVERSITY</small>
                                    </li>
                                    <li>
                                        <img src="/img/Landing/kakashi.jpg" className="wpx-100 img-round mgb-20" title="" alt="" data-edit="false"
                                            data-editor="field"
                                            data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]" />
                                        <p className="fs-110 font-cond-l" contenteditable="false">" Doing internship during the pandemic
                                            is hard, please wear your mask! "</p>
                                        <h5 className="font-cond mgb-5 fg-text-d fs-130" contenteditable="false">Kakashi Hatake</h5>
                                        <small className="font-cond case-u lts-sm fs-80 fg-text-l" contenteditable="false">Postgraduate
                                            in Communication | UOW KDU UNIVERSITY</small>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <div id="company">
                            <section>
                                <div className="container">
                                    <h1 className="unify-heading pad-company"> FEATURED COMPANIES </h1>
                                    <div className="row ">
                                        <div className="col-sm-3">
                                            <div className="h-100">
                                                <a href="https://shopee.com.my/" className="card box-hover cover-background border-0 p-4">
                                                    <img src="/img/Landing/shopee.png" alt="company logo" />
                                                    <div className="mt-auto position-relative z-index-9">
                                                        <h5 className="text-white">Shopee</h5>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-9">
                                            <div className="row margin-30px-bottom">
                                                <div className="col-md-4 xs-margin-30px-bottom">
                                                    <a href="https://www.digi.com.my/"
                                                        className="card box-hover cover-background border-0 p-4">
                                                        <img src="/img/Landing/digi-logo.png" alt="company logo" />
                                                        <div className="mt-auto position-relative z-index-9">
                                                            <h5 className="text-white">Digi</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-md-4 xs-margin-30px-bottom">
                                                    <a href="https://www.dhl.com/my-en/home.html?locale=true"
                                                        className="card box-hover cover-background border-0 p-4">
                                                        <img src="/img/Landing/DHL.png" alt="company logo" />
                                                        <div className="mt-auto position-relative z-index-9">
                                                            <h5 className="text-white">DHL</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-md-4">
                                                    <a href="https://www.nestle.com.my/"
                                                        className="card box-hover cover-background border-0 p-4">
                                                        <img src="/img/Landing/Nestle-Logo.png" alt="company logo" />
                                                        <div className="mt-auto position-relative z-index-9">
                                                            <h5 className="text-white">Nestle</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 xs-margin-30px-bottom">
                                                    <a href="https://www.agoda.com/?cid=1844104"
                                                        className="card box-hover cover-background border-0 p-4">
                                                        <img src="/img/Landing/agoda.png" alt="company logo" />
                                                        <div className="mt-auto position-relative z-index-9">
                                                            <h5 className="text-white">Agoda </h5>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="col-md-4 xs-margin-30px-bottom">
                                                    <a href="https://www.ifastcapital.com.my/myifast/what-we-offer"
                                                        className="card box-hover cover-background border-0 p-4">
                                                        <img src="/img/Landing/iFast.png" alt="company logo" />
                                                        <div className="mt-auto position-relative z-index-9">
                                                            <h5 className="text-white">iFast</h5>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </section>



                <section>
                    <div id="team" >
                        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
                        <div className="social-team-section">
                            <div className="rs-team fullwidth-team pt-100 pb-70">
                                <h1 className="unify-heading social-Heading" contenteditable="false">SOCIAL TEAM</h1>
                                <div className="container">

                                    <div className="row">
                                        <div className="col-md-3">
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <img src="/img/Landing/green.png" alt="team" />
                                                    <div className="normal-text">
                                                        <h4 className="team-name">Chan Hua Jian </h4>
                                                        <span className="subtitle">CEO &amp; Lao Ban</span>
                                                    </div>
                                                </div>
                                                <div className="team-content">
                                                    <div className="display-table">
                                                        <div className="display-table-cell">
                                                            <div className="share-icons">
                                                                <ul className="team-social icons-1">
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-facebook"></i></a>
                                                                    </li>
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-instagram"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="team-details">
                                                                <h4 className="team-name">
                                                                    <a href="/">Chan Hua Jian</a>
                                                                </h4>
                                                                <span className="postion">CEO &amp; Lao Ban</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <img src="/img/Landing/red.png" alt="team" />
                                                    <div className="normal-text">
                                                        <h4 className="team-name">Choon Whitney</h4>
                                                        <span className="subtitle">Assistant &amp; Founder</span>
                                                    </div>
                                                </div>
                                                <div className="team-content">
                                                    <div className="display-table">
                                                        <div className="display-table-cell">
                                                            <div className="share-icons">
                                                                <ul className="team-social icons-1">
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-facebook"></i></a>
                                                                    </li>
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-instagram"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="team-details">
                                                                <h4 className="team-name">
                                                                    <a href="/">Choon Whitney</a>
                                                                </h4>
                                                                <span className="postion">Assistant &amp; Founder</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <img src="/img/Landing/purple.png" alt="team" />
                                                    <div className="normal-text">
                                                        <h4 className="team-name">Tan Xian Zheng</h4>
                                                        <span className="subtitle">CEO &amp; Founder</span>
                                                    </div>
                                                </div>
                                                <div className="team-content">
                                                    <div className="display-table">
                                                        <div className="display-table-cell">
                                                            <div className="share-icons">
                                                                <ul className="team-social icons-1">
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-facebook"></i></a>
                                                                    </li>
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-instagram"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="team-details">
                                                                <h4 className="team-name">
                                                                    <a href="/">Tan Xian Zheng</a>
                                                                </h4>
                                                                <span className="postion">CEO &amp; Founder</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 ">
                                            <div className="team-item">
                                                <div className="team-img">
                                                    <img src="/img/Landing/yellow.png" alt="team" />
                                                    <div className="normal-text">
                                                        <h4 className="team-name">Khoo Yee Xiang</h4>
                                                        <span className="subtitle">CEO &amp; Founder</span>
                                                    </div>
                                                </div>
                                                <div className="team-content">
                                                    <div className="display-table">
                                                        <div className="display-table-cell">
                                                            <div className="share-icons">
                                                                <ul className="team-social icons-1">
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-facebook"></i></a>
                                                                    </li>
                                                                    <li><a href="/" className="social-icon"><i
                                                                        className="fa fa-instagram"></i></a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="team-details">
                                                                <h4 className="team-name">
                                                                    <a href="/">Khoo Yee Xiang</a>
                                                                </h4>
                                                                <span className="postion">CEO &amp; Founder</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}