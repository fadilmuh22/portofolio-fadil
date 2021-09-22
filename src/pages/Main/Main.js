import { Route } from 'react-router-dom';

import '../../styles/Main.css';

import Greetings from './Greetings';
import Experiences from './Experiences';
import Educations from './Educations';
import BottomNav from '../../components/BottomNav';

export default function Main() {
    return (
        <div className="main-page">
            <Greetings />
            <Experiences />
            <Educations />
        </div>
    );
}
