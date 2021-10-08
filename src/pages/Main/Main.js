// import { useRef } from 'react';

import '../../styles/Main.css';

import Greetings from './Greetings';
import Experiences from './Experiences';
// import useOnScreen from '../../hooks/useOnScreen';

export default function Main() {
    return (
        <div className="main-page">
            <Greetings />
            <Experiences />
        </div>
    );
}
