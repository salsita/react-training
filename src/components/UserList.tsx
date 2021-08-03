import {ChangeEvent, Component} from "react";

interface Props {}

interface State {
    users: string[];
    newUserName: string;
}

export class UserList extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            users: [],
            newUserName: ''
        }
    }

    onClick = () => {
        this.setState({
           users: [
              ...this.state.users,
               this.state.newUserName
           ],
            newUserName: ''
        })
    }

    onTextInput = (input: ChangeEvent<HTMLInputElement>) => {
        console.log(input.target.value)
        this.setState({
            newUserName: input.target.value,
        })
    }

    render() {
        return (
            <>
                <input type={"text"} onChange={this.onTextInput} value={this.state.newUserName} />
                <button onClick={this.onClick}>Add John</button>
                <ul>
                    {this.state.users.map(user => <li key={user}>{user}</li>)}
                </ul>
            </>
        )
    }
}