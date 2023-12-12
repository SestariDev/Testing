

function Input({text,onHandlerChange,value,placeholder,type, id, classe}) {
    return(
        <>
            <label htmlFor={id}>{text}</label>
            <input type={type} name={id} onChange={onHandlerChange} placeholder={placeholder} id={id} value={value} className={classe}></input>
        </>
    )
}

export default Input