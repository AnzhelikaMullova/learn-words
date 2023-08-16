
import st from './header.module.scss';
import logo from '../../img/logo.png';
// import '../../style/vars.scss';

export default function Header() {
    return (
        <div className={st.header}>
            <img className={st.header_logo} src={logo} alt="logo" />
            <nav className={st.header_nav}>
                <ul className={st.header_nav_list}>
                    <li className={st.header_nav_list_item}>Карточки слов</li>
                    <li className={st.header_nav_list_item}>Список слов</li>
                    <li className={st.header_nav_list_item}>Выученные слова</li>
                </ul>
            </nav>

        </div>
    )
}