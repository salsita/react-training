import { Component, ReactElement } from "react";

interface Props {
  text: string;
}

export class Header extends Component<Props> {
  render(): ReactElement {
    const text = this.props.text;

    return <h1>{text}</h1>;
  }
}
