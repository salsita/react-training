import React from "react";
import {render} from "react-dom";

export interface HeaderProps {
    title: string
}

export const Header = (props: HeaderProps) => {
    return (
        <h1>{props.title}</h1>
    )
}


export class HeaderClass extends React.Component<HeaderProps> {
    render()
    {
        return (
            <h1>{this.props.title}</h1>
        )
    }
}