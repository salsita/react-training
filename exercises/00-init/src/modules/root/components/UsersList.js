import React from "react";

const Arya = {
    id: Symbol(),
    firstName: "Arya",
    lastName: "Stark"
};

const Daenerys = {
    id: Symbol(),
    firstName: "Daenerys",
    lastName: "Targaryen"
};

export class UsersList extends React.Component {
    state = {
        users: []
    };
    addUser = user => {
        this.setState({
            users: [...this.state.users, user]
        });
    };
    addArya = () => this.addUser(Arya);
    addDaenerys = () => this.addUser(Daenerys);
    render() {
        const userViews = this.state.users.map(user => (
            <li>{`${user.firstName} ${user.lastName}`}</li>
        ));
        const userList = userViews.length ? <ul>{userViews}</ul> : "No Users";
        return (
            <div>
                {userList}
                <button
                    onClick={this.addArya}
                >{`Add ${Arya.firstName}`}</button>
                <button
                    onClick={this.addDaenerys}
                >{`Add ${Daenerys.firstName}`}</button>
            </div>
        );
    }
}
