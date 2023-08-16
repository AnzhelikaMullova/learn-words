import st from './slider.module.scss';
import data from '../../data.json';
import Cards from './Cards';
import { useEffect, useState } from 'react';

export default function Slider() {
    const [cards, setCards] = useState([])
    const [count, setCuont] = useState(0)// состояние счетчика карты, берем нулевой индекс изначально

    useEffect(() => {
        setCards(data)
    }, [])
    return (
        <div className={st.slider}>
            {

                <Cards item={cards[count]}


                />
            }

        </div>
    )
}