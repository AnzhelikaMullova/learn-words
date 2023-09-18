
import st from './header.module.scss';
import logo from '../../img/logo.svg';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import Home from '../Home/Home';
import Slider from '../Slider/Slider';
import WordList from '../Table/WordList';
import Notfoundpage from '../Notfoundpage/Notfoundpage';

export default function Header() {
    return (


        <div>
            <header className={st.header}>
                <img className={st.header_logo} src={logo} alt="logo" />
                <nav className={st.header_nav}>
                    <ul className={st.header_nav_list}>
                        <li >
                            <Link className={st.header_nav_list_item} to="/">Home</Link>
                        </li>
                        <li >
                            <Link className={st.header_nav_list_item} to="/cards">Карточки слов</Link>
                        </li>
                        <li>
                            <Link className={st.header_nav_list_item} to="/listwords">Список слов</Link>
                        </li>

                    </ul>
                </nav>
            </header>
            <main>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/cards" element={<Slider />} />
                    <Route path="/listwords" element={<WordList />} />
                    <Route path="*" element={<Notfoundpage />} />
                </Routes>
            </main>
        </div>


    );
}
