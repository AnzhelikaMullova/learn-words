
import st from './home.module.scss'
import { HashLink as Link } from 'react-router-hash-link';


export default function Home() {


    return (

        <div className={st.container_home}>
            <h1>Добро пожаловать в школу для изучение англ языка</h1>
            <p>Описание школы</p>
            <Link smooth to="/#Slider"> Начать обучение</Link>

        </div>


    )
}