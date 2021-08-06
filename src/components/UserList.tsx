import {ChangeEvent, Component, ReactElement} from "react";

type Props = Record<string, never>

interface State {
  users: string[];
  newUserName: string;
}

export class UserList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      users: [],
      newUserName: "",
    };
  }

  onClick = (): void => {
    this.setState({
      users: [...this.state.users, this.state.newUserName],
      newUserName: "",
    });
  };

  onTextInput = (input: ChangeEvent<HTMLInputElement>): void => {
    console.log(input.target.value);
    this.setState({
      newUserName: input.target.value,
    });
  };

  render(): ReactElement {
    return (
      <>
        <input
          type={"text"}
          onChange={this.onTextInput}
          value={this.state.newUserName}
        />
        <button onClick={this.onClick}>Add John</button>
        <ul>
          {this.state.users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </>
    );
  }
}
