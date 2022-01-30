import {useState} from "react";

export const useForm = (initialValue) => {
    const [value, setValue] = useState();
    return [
        {value, onChange: e => setValue(e.target.value)},
        () => setValue(initialValue)
    ]
}
