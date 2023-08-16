import st from './slider.module.scss';
import data from '../../data.json';
import Cards from './Cards';
import { useEffect, useState } from 'react';

export default function Slider() {
    const [cards, setCards] = useState([])
    const [count, setCount] = useState(0)// состояние счетчика карты, берем нулевой индекс изначально

    useEffect(() => {
        setCards(data)
    }, [])

    function handleClickPrev(item) {
        let copyCount = count// создаем переменную в которой хванится номер 
        copyCount-- // уменьшаем на 1
        // if (copyCount === data.length) {
        //     copyCount = data.length - 1;
        // }
        setCount(copyCount)
    }

    function handleClickNext() {
        let copyCount = count
        // copyCount++
        // if (copyCount === data.length) {
        //     copyCount = data.length + 1;
        // }
        setCount(copyCount)

    }
    return (
        <div className={st.slider}>
            <button onClick={handleClickPrev} className={st.slider_button}>Предвущая карточка </button>
            <Cards item={cards[count]} />
            <button onClick={handleClickNext} className={st.slider_button}>Следующая карточка </button>
        </div>
    )
}