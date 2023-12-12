function Select({id, text, options, handleOnchange, value, classe,}){
    return(
        <>
        <label htmlFor={id}>{text}</label>

        <select id={id} onChange={handleOnchange} className={classe} name={id} value={value || ''}>
            <option>Selecione a categoria</option>
               {
                options.map((option) => (
                    <option value={option.id} key={option.id}>{option.name}</option>
                )
               )}
        </select>
        </>
    )

}

export default Select