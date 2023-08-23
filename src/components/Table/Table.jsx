import data from '../../data.json'
import { useEffect, useState } from 'react';
import st from './table.module.scss';

export default function Table(props) {
    const [words, setWords] = useState(false)
    const [openInput, setOpenInput] = useState(true)
    const [valueEnglish, setValueEnglish] = useState('')
    const [valueTranscription, setValueTranscription] = useState('')
    const [valueRussian, setValueRussian] = useState('')



    useEffect(() => {
        setWords(data)
        setValueEnglish(props.english)
        setValueTranscription(props.transcription)
        setValueRussian(props.russian)
    }, [props])
    function cancelEditing() { //функция отмена редактировнаия
        setOpenInput(!openInput)
    }
    function deleteLine(event) {

    }

    if (!words) {
        return <h1>Loading...</h1>
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
                            <button className={st.table_button} onClick={deleteLine()}>Удалить</button>
                        </div >
                    ) :
                    (
                        <div>
                            <input type='text' defaultValue={valueEnglish} />
                            <input type='text' defaultValue={valueTranscription} />
                            <input type='text' defaultValue={valueRussian} />

                            <button onClick={cancelEditing} >Отмена редактирования</button>
                            <button>Сохранить изменения</button>
                        </div>
                    )
            }





        </div >


    )
}