import React from 'react';


type ButtonType = {
    disabled: boolean
    title: string
    callback: ()=>void
}

export const Button = (props: ButtonType) => {
    return (
        <button disabled={props.disabled} onClick={props.callback}>{props.title}</button>
    );
};
