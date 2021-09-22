import '../../styles/Greetings.css';
import ProfpicFadil from '../../assets/profpic-fadil.png';

export default function Experiences() {
    return (
        <div id="educations" className="section">
            <div className="flex-left">
                <p style={{ fontSize: '24px' }}>Hello, I'am</p>
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

                <div className="socials" style={{ display: 'block' }}>
                    <p style={{ fontSize: '24px' }}>Find me on</p>
                </div>
            </div>

            <div className="flex-right">
                <img src={ProfpicFadil} alt="Fadil Muh" />
            </div>
        </div>
    );
}
