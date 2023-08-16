
import st from './table.module.scss';
export default function Table(props) {

    return (


        <div>



            <input placeholder='Слово' defaultValue={props.english} />
            <input placeholder='Транскрипция' defaultValue={props.transcription} />
            <input placeholder='Перевод' defaultValue={props.russian} />
            <button>Редактировать</button>
            <button>Отмена редактирования</button>
            <button>Удалить</button>




        </div>


    )
}