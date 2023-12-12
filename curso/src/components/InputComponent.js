import { useState } from "react"

function InputComponent({value}) {

    const [inputValue,setInputValue] = useState(value)

    return(
        <div>
            <label htmlFor="ip"></label>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} id="ip" ></input>
            {inputValue}
        </div>
    )
}


export default InputComponent