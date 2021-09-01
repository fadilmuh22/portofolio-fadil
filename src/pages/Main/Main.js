import '../../styles/Main.css';

import Greetings from './Greetings';
import BottomNav from '../../components/BottomNav';

export default function Main() {
    return (
        <div className="main-page">
            <Greetings />
            <BottomNav name="Greetings" />
        </div>
    );
}
