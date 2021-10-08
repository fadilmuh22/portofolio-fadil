import React from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../../styles/Experiences.css';
import ReactLogo from '../../assets/react-logo.png';
import FlutterLogo from '../../assets/flutter-logo.png';
import IonicLogo from '../../assets/ionic-logo.png';
import AngularLogo from '../../assets/angular-logo.png';

export default function Experiences() {
    // const refG = useRef()
    // const refGVisible = useOnScreen(refG)

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
    };

    const techLogos = {
        react: ReactLogo,
        flutter: FlutterLogo,
        ionic: IonicLogo,
        angular: AngularLogo,
    };

    const myExperieneces = [
        {
            name: 'Quick ISK',
            date: '3 Months of Work',
            description:
                'Quick calculation of score predictions and conversion of accreditation ranks both universities or institution or college and study programs.',
            techs: ['flutter'],
        },
        {
            name: 'PTPN 4',
            date: '1 Month of Work',
            description:
                'Pest reporting application for PT Perkebunan Nusantara.',
            techs: ['flutter'],
        },
        {
            name: 'InvestX',
            date: '09/2020 - 11/2020',
            description:
                'Equity Crowdfunding platform that connects business and investors.',
            techs: ['react', 'flutter'],
        },
        {
            name: 'Ampuh',
            date: '2 Months of Work',
            description:
                'Migrating Ampuh from Ionic 3 to 5 and new add new modul “Ametyst”.',
            techs: ['ionic', 'angular'],
        },
    ];

    return (
        <div id="experiences" className="section">
            <div className="exp-title">
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    My Experiences as a Developer
                </h1>
            </div>

            <div style={{ marginTop: '52px' }} className="carousel">
                <Slider {...settings}>
                    {myExperieneces.map((exp, i) => (
                        <div className="exp-card-container" key={i}>
                            <div className="exp-card">
                                <div className="exp-logo">
                                    <div
                                        style={{
                                            background:
                                                'rgba(255, 249, 249, 0.62)',
                                            width: 120,
                                            height: 120,
                                            borderRadius: '50%',
                                        }}
                                    ></div>
                                </div>
                                <h3
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        marginTop: 22,
                                        marginBottom: 22,
                                    }}
                                >
                                    {exp.name}
                                </h3>
                                <div
                                    style={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'end',
                                        fontSize: 13,
                                        marginBottom: 22,
                                    }}
                                >
                                    <p> {exp.date} </p>
                                </div>
                                <p style={{ fontSize: 16 }}>
                                    {exp.description}
                                </p>
                                <div className="tech-logos-container">
                                    {exp.techs.map((t) =>
                                        !!t ? (
                                            <img
                                                className="tech-logo"
                                                src={techLogos[t]}
                                                alt={t}
                                            />
                                        ) : (
                                            <></>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="carousel-exp"></div>
        </div>
    );
}
