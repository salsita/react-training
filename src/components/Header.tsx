import {Component, FC} from "react";

interface Props {
    text: string;
}

export const Header: FC<Props> = ({text}) => (
    <h1>{text}</h1>
)
