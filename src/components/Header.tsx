import {Component} from "react";

interface Props {
    text: string;
}

export class Header extends Component<Props> {
    render() {
        const text = this.props.text;

        return (
            <h1>{text}</h1>
        )
    }
}