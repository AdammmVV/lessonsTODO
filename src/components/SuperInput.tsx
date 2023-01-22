import React, {ChangeEvent} from "react";

type SuperInputPropsType = {
    setTitle: (e:string)=> void
    newTitle: string
}

export const SuperInput:React.FC<SuperInputPropsType> = ({setTitle, newTitle}) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>)=> {
        setTitle(event.currentTarget.value)
    }
    return (
        <input value={newTitle} onChange={onChangeHandler}/>
    )
}