import React from "react";

type PropsType = {
    name: string
    callBack: ()=> void
}

export const SupperButton: React.FC<PropsType> = ({name, callBack}) => {

    const callBackHandler = () => {
        callBack()
    }

    return (
        <button onClick={callBackHandler}>{name}</button>
    )
}