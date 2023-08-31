import data from '../../data.json'
import Table from './Table'
import { useState } from 'react';
export default function WordList() {

    const [words, setWords] = useState(data);

    function deleteLine(id) {
        const dataRow = [...words];
        dataRow.splice(id, 1);
        setWords(dataRow);
    }
    function editWordsPost(english, transcription, russian, id) {

        const copyWords = [...words]
        const resultEditWords = copyWords.map(item => {
            if (item.id == id) { //если id массива будет равен передаваемому массиву то
                item.english = english
                item.transcription = transcription
                item.russian = russian
                return item
            }
            return item
        })
        setWords(resultEditWords)
    }
    if (!words) {
        return <h1>Loading...</h1>
    }

    return (
        <div >
            <h1>Список слов</h1>
            {
                words.map((item, index, id) => (
                    <Table
                        key={item.id}
                        english={item.english}
                        transcription={item.transcription}
                        russian={item.russian}
                        isSelected={item.isSelected}
                        index={index}
                        deleteLine={deleteLine}
                        editWordsPost={editWordsPost}
                    // id={props.id}
                    />
                ))
            }
        </div>
    )
}