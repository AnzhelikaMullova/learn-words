
import st from './home.module.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Slider from '../Slider/Slider';
import fon from '../../img/fon.png'

export default function Home() {


    return (

        <div className={st.home}>
            <div className={st.home_description} >
                <h1 className={st.home_description_h1}>Добро пожаловать в школу для изучение английского языка Best English Academy</h1>
                <p className={st.home_description_about}>Выучить англизйский язык легко! Занимаясь по 10 минут в день , вы научитесь произносить и воспринимать на слух английскую речь!</p>
                <Link className={st.home_description_button} to="/cards">Начать обучение</Link>
            </div>
            <img className={st.home_fon} src={fon} alt="fon" />
            <div>
                <Routes>
                    <Route path="/cards" element={<Slider />} />
                </Routes>
            </div>
        </div >



    )
}