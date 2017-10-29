import React, {Component} from 'react';
import './List.css';

class List extends Component {
    state = {
        items: [
            {
                id: 0,
                text: "Make a task list app in React",
                active: true
            },
            {
                id: 1,
                text: "Do beach yoga",
                active: true
            },
            {
                id: 2,
                text: "Purchase drinks for the gang",
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
        });
        console.log(this.state.items)
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
            }
        ).map((item) => {
            return <span style={{textDecoration: 'line-through'}}>
                    <li onClick={this.clickHandler.bind(this, item.id)} key={item.id}>{item.text}</li>
                </span>
        })
    };

    showActive = () => {
        return this.state.items.filter((item) => {
            console.log(item);
            return item.active === true;
        }).map((item) => {
            return <li onClick={this.clickHandler.bind(this, item.id)} key={item.id}>{item.text}</li>
        })
    };


    render() {
        let todos = this.state.showCompleted ? this.showCompleted() : "";

        let completedItems = this.state.items.filter((item) => {
            return !item.active
        }).length;

        return (
            <div className="taskBox">
                <h1>Task List</h1>
                <input type="text"/>
                <ul> {this.showActive()}</ul>
                <div className="addMoreItems">+ New Item</div>
                <p className="completed"
                   onClick={this.onCompletedClick}>
                    Completed({completedItems})
                </p>
                <ul> {todos} </ul>
            </div>

        );
    }
}


export default List;
