import { useState, useEffect, useRef } from 'react';
import st from './cards.module.scss';


export default function Cards(props) {
    const [showTranslation, setShowTranslation] = useState(false);// состояние перевод не показан
    const btnRef = useRef()

    useEffect(() => {  //use Effect следит за изменением пропсов
        if (!props.item) {
            return;         //если пропс не менялся, то return - сразу выйти из useEffect и ничего не делать
        }
        return () => {
            setShowTranslation(false)
        };
    }, [props.item]);

    useEffect(() => {
        btnRef?.current?.focus(null);
    })
    const handleShowTranslation = () => {
        setShowTranslation(!showTranslation);
    };
    return (
        <div className={st.cards}>
            <p className={st.cards_english}>{props.item.english}</p>
            <p className={st.cards_transcription}>{props.item.transcription}</p>
            {
                showTranslation === false ? <button ref={btnRef} onClick={() => { handleShowTranslation(); props.countStudiedWords() }} className={st.cards_button}>Показать перевод</button> : <p className={st.cards_transcription}>{props.item.russian}</p>
            }
            <p>Выученно:{props.studiedWords}</p>
        </div>

    )
}