import { useEffect, useState } from 'react';
import st from './table.module.scss';
export default function Table(props, item, editWordsPost) {
    // const [english, transcription, russian] = item
    const [openInput, setOpenInput] = useState(true)
    const [valueEnglish, setValueEnglish] = useState('')
    const [valueTranscription, setValueTranscription] = useState('')
    const [valueRussian, setValueRussian] = useState('')
    useEffect(() => {
        setValueEnglish(props.english)
        setValueTranscription(props.transcription)
        setValueRussian(props.russian)
    }, [props, item])
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
        editWordsPost(valueEnglish, valueTranscription, valueRussian)
    }

    return (
        < div >
            {/* <div>
                                <p>Добавить новое слово</p>
                                <input type='text' />
                                <input type='text' />
                                <input type='text' />
                                <button >Добавить</button>
                            </div> */}


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
                            <input type='text' value={valueEnglish} onChange={handleEnglish} />
                            <input type='text' value={valueTranscription} onChange={handleTranscription} />
                            <input type='text' value={valueRussian} onChange={handleRussian} />
                            <button onClick={cancelEditing} >Отмена редактирования</button>
                            <button onClick={savePost}>Сохранить изменения</button>
                        </div>
                    )
            }
        </div >
    )
}