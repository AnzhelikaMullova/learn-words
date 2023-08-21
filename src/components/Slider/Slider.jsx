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
    let copyCount = count// создаем переменную в которой хванится номер
    function handleClickPrev(item) { // функция которая листакт слайдер назад

        if (copyCount > 0) {

            copyCount-- // уменьшаем на 1
        }
        else {
            copyCount = cards.length
        }
        setCount(copyCount)

    }

    function handleClickNext() { // функция которая листает слайдер вперед

        if (copyCount < cards.length) {

            copyCount++         //увеличиваем на уедицу чтобы перелеснуть
        }
        else {
            copyCount = 0
        }
        setCount(copyCount) // записываем в состояние
    }
    if (cards.lenght == 0) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={st.slider}>
            <button onClick={handleClickPrev} className={st.slider_button}>Предыдущая карточка </button>
            <Cards item={cards[count]} />
            <button onClick={handleClickNext} className={st.slider_button}>Следующая карточка </button>
        </div>
    )
}