
import data from '../../data.json'
import Table from './Table'

export default function WordList() {



    return (
        <div >
            <h1>Список слов</h1>
            {
                data.map((item) => (
                    <Table
                        english={item.english}
                        transcription={item.transcription}
                        russian={item.russian}
                        isSelected={item.isSelected}

                    />

                ))
            }
        </div>
    )
}