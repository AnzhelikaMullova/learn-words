
import st from './home.module.scss'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Slider from '../Slider/Slider';

export default function Home() {


    return (

        <div className={st.container_home}>
            <h1>Добро пожаловать в школу для изучение англ языка</h1>
            <p>Описание школы</p>
            <Link to="/cards">Начать обучение</Link>
            <div>
                <Routes>
                    <Route path="/cards" element={<Slider />} />
                </Routes>
            </div>
        </div>



    )
}