
import st from './header.module.scss';
import logo from '../../img/logo.png';
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
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/cards">Карточки слов</Link>
                        </li>
                        <li>
                            <Link to="/listwords">Список слов</Link>
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
        // <div className={st.header}>
        //     <img className={st.header_logo} src={logo} alt="logo" />
        //     <nav className={st.header_nav}>
        //         <ul className={st.header_nav_list}>
        //             <li className={st.header_nav_list_item}>Карточки слов</li>
        //             <li className={st.header_nav_list_item}>Список слов</li>
        //             <li className={st.header_nav_list_item}>Выученные слова</li>
        //         </ul>
        //     </nav>
        // <Route path="/learnedwords" element={<Users />} />
        // </div>
