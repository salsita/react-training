import {Component, FC} from "react";

interface Props {
    text: string;
}

export const Header: FC<Props> = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}