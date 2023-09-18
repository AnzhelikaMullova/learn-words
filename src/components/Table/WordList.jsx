import React, { useState } from 'react'; // Импорт React и useState
import data from '../../data.json';
import Table from './Table';
export default function WordList() {
    const [words, setWords] = useState(data);
    const [inputValueEnglish, setInputValueEnglish] = useState('');
    const [inputValueTranscription, setInputValueTranscription] = useState('');
    const [inputValueRussian, setInputValueRussian] = useState('');

    const rusLower = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'
    const rusUpper = rusLower.toUpperCase()
    const enLower = 'abcdefghijklmnopqrstuvwxyz'
    const enUpper = enLower.toUpperCase()
    const rus = rusLower + rusUpper
    const en = enLower + enUpper

    function handleChange(event) {
        const { name, value } = event.target;
        if (name === 'newEnglish') {
            setInputValueEnglish(value);
        } else if (name === 'newTranscription') {
            setInputValueTranscription(value);
        } else if (name === 'newRussian') {
            setInputValueRussian(value);
        }
    }



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
        <div>
            <h1>Список слов</h1>
            <div>
                <p>Добавить новое слово</p>
                <input type="text" name="newEnglish" value={inputValueEnglish} onChange={handleInputChangeEnglish} />
                <input type="text" name="newTranscription" value={inputValueTranscription} onChange={handleInputChangeTranscription} />
                <input type="text" name="newRussian" value={inputValueRussian} onChange={handleInputChangeRussian} />
                <button onClick={handleAddRow}>Добавить</button>
            </div>
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