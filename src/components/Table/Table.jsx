import { useEffect, useState } from 'react';
import st from './table.module.scss';
export default function Table(props) {
    const [openInput, setOpenInput] = useState(true)
    const [valueEnglish, setValueEnglish] = useState('')
    const [valueTranscription, setValueTranscription] = useState('')
    const [valueRussian, setValueRussian] = useState('')

    useEffect(() => {
        setValueEnglish(props.english)
        setValueTranscription(props.transcription)
        setValueRussian(props.russian)
    }, [props])
    function cancelEditing() { //функция отмена редактировнаия
        setOpenInput(!openInput)
    }
    function handleEnglish(e) {
        setValueEnglish(e.target.value)
    }
    function handleTranscription(e) {
        setValueTranscription(e.target.value)
    }

    function handleRussian(e) {
        setValueRussian(e.target.value)
    }

    function savePost() {
        props.editWordsPost(valueEnglish, valueTranscription, valueRussian, props.id);
        setOpenInput(!openInput)
    }


    return (
        < div >

            {
                openInput ?
                    (
                        <div className={st.table}>
                            <p className={st.table_word}>{props.english}</p>
                            <p className={st.table_tr}>{props.transcription}</p>
                            <p className={st.table_th}>{props.russian}</p>
                            <button className={st.table_button} onClick={() => { setOpenInput(!openInput) }}>Редактировать</button>
                            <button className={st.table_button} onClick={() => props.deleteLine(props.index)}>Удалить</button>
                        </div >
                    ) :
                    (
                        <div>
                            <input className={st.table_word} type='text' value={valueEnglish} onChange={handleEnglish} />
                            <input className={st.table_word} type='text' value={valueTranscription} onChange={handleTranscription} />
                            <input className={st.table_word} type='text' value={valueRussian} onChange={handleRussian} />
                            <button className={st.table_button} onClick={cancelEditing} >Отмена редактирования</button>
                            <button className={st.table_button} onClick={savePost}>Сохранить изменения</button>
                        </div>
                    )
            }
        </div >
    )
}