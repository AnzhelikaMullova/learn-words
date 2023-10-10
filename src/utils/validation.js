export const  handleEnglish =(e) =>{
    const value = e.target.value
    setValueEnglish(value)
    const isValid = /^[a-zA-Z]*$/.test(value)
    setIsValidEnglish(isValid)
    if (!isValid) {
        alert('Ошибка:вводите слова на английском языке')
        setValueEnglish('')
    }
}

export const handleRussian =(e) =>{
    const value = e.target.value
    setValueRussian(value)
    const isValid = /^[а-яА-ЯёЁ]*$/.test(value)
    setIsValidRussian(isValid)
    if (!isValid) {
        alert('Ошибка:вводите слова на русском языке')
        setIsValidRussian('')
    }
}