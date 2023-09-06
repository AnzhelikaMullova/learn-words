import st from './slider.module.scss';
import data from '../../data.json';
import Cards from './Cards';
import { useEffect, useState } from 'react';
export default function Slider() {
    const [cards, setCards] = useState(false)
    const [count, setCount] = useState(0)// состояние счетчика карты, берем нулевой индекс изначально
    const [studiedWords, setStudiedWords] = useState(0)// состояние, показывает сколько слов изученно за одну тренеровку

    useEffect(() => {
        setCards(data)
    }, [])

    let copyCount = count// создаем копию переменную в которой хванится номер
    function handleClickPrev() { // функция которая листакт слайдер назад
        if (copyCount > 0) {
            copyCount-- // уменьшаем на 1
        } else {
            copyCount = cards.length - 1

        }
        setCount(copyCount) // записываем в состояние
    }
    function handleClickNext() { // функция которая листает слайдер вперед
        if (copyCount < cards.length - 1) {
            copyCount++         //увеличиваем на уедицу чтобы перелеснуть
        } else {
            copyCount = 0
        }
        setCount(copyCount) // записываем в состояние
    }
    function countStudiedWords() {// функция, которая считает количество изученных слов

    }
    if (!cards) {
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