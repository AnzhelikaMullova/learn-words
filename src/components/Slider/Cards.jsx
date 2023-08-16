import { useState } from 'react';
import st from './cards.module.scss';


export default function Cards(props) {
    console.log(props);


    const [showTranslation, setShowTranslation] = useState(false);
    const handleShowTranslation = () => {
        setShowTranslation(!showTranslation);
    };



    return (
        <div className={st.cards}>
            <p className={st.cards_english}>{props.english}</p>
            <p className={st.cards_transcription}>{props.transcription}</p>
            {
                showTranslation == false ? <button onClick={handleShowTranslation} className={st.cards_button}>Показать перевод</button> : <p className={st.cards_transcription}>{props.russian}</p>
            }

            <p>Выученно: 0 слов</p>
        </div>

    )
}