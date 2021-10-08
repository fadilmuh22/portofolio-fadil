import '../../styles/Greetings.css';
import GithubLogo from '../../assets/github-logo.png';
import LinkedinLogo from '../../assets/linkedin-logo.png';
import ProfpicFadil from '../../assets/profpic-fadil.png';
import { useRef } from 'react';
// import useOnScreen from '../../hooks/useOnScreen';

export default function Greetings() {
    const refG = useRef();
    // const refGVisible = useOnScreen(refG)

    return (
        <div id="greetings" className="section">
            <div className="greetings-container">
                <div className="flex-left">
                    <p ref={refG} style={{ fontSize: '24px' }}>
                        Hello, I'am
                    </p>
                    <h1 style={{ fontSize: '72px', fontWeight: 'bold' }}>
                        Fadil Muh
                    </h1>
                    <p style={{ fontSize: '24px' }}>
                        A{' '}
                        <span style={{ fontWeight: 'bold' }}>
                            Software Engineer
                        </span>{' '}
                        with passion to change the world
                    </p>
                    <br />

                    <div className="socials" style={{ display: 'block' }}>
                        <p style={{ fontSize: '22px' }}>Find me on</p>
                    </div>
                    <div style={{ display: 'flex', marginTop: 12 }}>
                        <a
                            style={{ marginRight: 12 }}
                            href="http://github.com/fadilmuh22"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                width="40px"
                                height="40px"
                                src={GithubLogo}
                                alt="Github"
                            />
                        </a>
                        <a
                            style={{ marginRight: 12 }}
                            href="http://linkedin.com/in/fadilmuh22"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                width="40px"
                                height="40px"
                                src={LinkedinLogo}
                                alt="Linkedin"
                            />
                        </a>
                    </div>
                </div>

                <div className="flex-right">
                    <img src={ProfpicFadil} alt="Fadil Muh" />
                </div>
            </div>
        </div>
    );
}
