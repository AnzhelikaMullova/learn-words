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

    function handleClickPrev(item) { // функция которая листакт слайдер назад
        let copyCount = count// создаем переменную в которой хванится номер 
        copyCount-- // уменьшаем на 1
        if (copyCount < cards.length) { // делаем проверку если copyCount меньше длинны массива
            copyCount = cards.length - 1; // то присваемваем ему последнюю карточку массива
        }
        setCount(copyCount) // записываем в состояние
    }

    function handleClickNext() { // функция которая листает слайдер вперед
        let copyCount = count  //переменной copyCount присваим номер каунта
        copyCount++         //увеличиваем на уедицу чтобы перелеснуть
        if (copyCount > cards.length) { // делаем проверку если индекс больше длинны нашего массива
            copyCount = 0;    // то присваиваем индекс ноль чтобы получить первую карточку
        }
        setCount(copyCount) // записываем в состояние
    }
    if (cards.lenght == 0) {
        return <h1>Loading...</h1>
    }
    return (
        <div className={st.slider}>
            <button onClick={handleClickPrev} className={st.slider_button}>Предвущая карточка </button>
            <Cards item={cards[count]} />
            <button onClick={handleClickNext} className={st.slider_button}>Следующая карточка </button>
        </div>
    )
}