import React, { useState } from 'react'; // Импорт React и useState
import data from '../../data.json';
import Table from './Table';
import imgtable from '../../img/imgtable.png';
import st from './wordList.module.scss';

export default function WordList() {
    const [words, setWords] = useState(data);
    const [inputValueEnglish, setInputValueEnglish] = useState('');
    const [inputValueTranscription, setInputValueTranscription] = useState('');
    const [inputValueRussian, setInputValueRussian] = useState('');

    const handleInputChangeEnglish = (e) => {
        setInputValueEnglish(e.target.value);
    };
    const handleInputChangeTranscription = (e) => {
        setInputValueTranscription(e.target.value);
    };
    const handleInputChangeRussian = (e) => {
        setInputValueRussian(e.target.value);
    };
    const handleAddRow = () => {
        if (
            inputValueEnglish.trim() !== '' ||
            inputValueTranscription.trim() !== '' ||
            inputValueRussian.trim() !== ''
        ) {
            const newRow = {
                id: Date.now(),
                english: inputValueEnglish,
                transcription: inputValueTranscription,
                russian: inputValueRussian,
            };
            setWords([...words, newRow]);
            setInputValueEnglish('');
            setInputValueTranscription('');
            setInputValueRussian('');
        }
    };
    function deleteLine(id) {
        const dataRow = [...words];
        dataRow.splice(id, 1);
        setWords(dataRow);
    }
    function editWordsPost(english, transcription, russian, id) {
        const updatedWords = words.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    english,
                    transcription,
                    russian,
                };
            }
            return item;
        });
        setWords(updatedWords);
    }
    if (!words) {
        return <h1>Loading...</h1>;
    }
    return (
        <div className={st.wordList}>
            <div className={st.wordList_description}>
                <div className={st.wordList_newWords}>
                    <p className={st.wordList_titleNewWords}>Добавить новое слово</p>
                    <input className={st.wordList_input} type="text" name="newEnglish" value={inputValueEnglish} onChange={(e) => {
                        handleInputChangeEnglish(e);

                    }} />
                    < input className={st.wordList_input} type="text" name="newTranscription" value={inputValueTranscription} onChange={(e) => {
                        handleInputChangeTranscription(e);

                    }} />
                    <input className={st.wordList_input} type="text" name="newRussian" value={inputValueRussian} onChange={(e) => {
                        handleInputChangeRussian(e);

                    }} />
                    <button className={st.wordList_button} onClick={handleAddRow}>Добавить</button>
                </div>
                <img className={st.wordList_imgtable} src={imgtable} alt="imgtable" />
            </div>
            <p className={st.wordList_titleWordList}>Список слов</p>
            {words.map((item, index) => (
                <Table
                    key={item.id}
                    english={item.english}
                    transcription={item.transcription}
                    russian={item.russian}
                    index={index}
                    deleteLine={deleteLine}
                    editWordsPost={editWordsPost}
                    id={item.id}
                />
            ))}
        </div>
    );
}