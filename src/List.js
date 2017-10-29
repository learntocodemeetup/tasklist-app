import React, {Component} from 'react';
import './List.css';

let id = 0;


class List extends Component {
    state = {
        items: [
            {
                id: id++,
                text: "Have lunch",
                active: true
            },
            {
                id: id++,
                text: "Get dinner",
                active: true
            },
            {
                id: id++,
                text: "Sleep",
                active: true
            }
        ],
        showCompleted: false

    };

    clickHandler = (id) => {
        this.setState({
            items: this.state.items.map((item, index) => {
                if (id === index) {
                    item.active = !item.active;
                    return item;

                } else {
                    return item;
                }
            })
        })

    };

    onCompletedClick = () => {
        this.setState({
            showCompleted: !this.state.showCompleted
        })
    };


    showCompleted = () => {

        return this.state.items.filter((item) => {
            console.log(item);
            return item.active === false;
        })
            .map((item) => {
                return (
                    <strike>
                        <li
                            onClick={this.clickHandler.bind(this, item.id)}
                            key={item.id}
                        >
                            {item.text}
                        </li>
                    </strike>
                )
            })

    };

    showActive = () => {

        return this.state.items.filter((item) => {
            console.log(item);
            return item.active === true;
        })
            .map((item) => {
                return (
                    <li
                        onClick={this.clickHandler.bind(this, item.id)}
                        key={item.id}
                    >
                        {item.text}
                    </li>
                );
            })

    };

    submitHandler = (e) => {
        e.preventDefault();
        console.dir(this.input.value);

        const newItem = {
            id: id++,
            text: this.input.value,
            active: true
        };


        this.setState({
            items: [...this.state.items, newItem]
        })
    };


    render() {
        let todos;

        const completedItems = this.state.items.filter((item) => {
            return !item.active
        }).length;


        if (this.state.showCompleted) {
            todos = this.showCompleted();
        } else {
            todos = "";
        }
        return (

            <div className="taskBox">
                <h1>Task List</h1>
                <form onSubmit={this.submitHandler}>
                    <input type="text" ref={(input) => this.input = input}/>
                </form>
                <ul>
                    {this.showActive()}
                </ul>

                <p
                    className="completed"
                    onClick={this.onCompletedClick}
                >
                    Completed({completedItems})
                </p>
                <ul>
                    {todos}
                </ul>
            </div>

        );
    }
}


export default List;
