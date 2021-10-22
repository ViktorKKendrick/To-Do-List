import React from 'react'
import { Component } from 'react'
import Item from './Item.js'
import './Container.css'

export default class Body extends Component {
    constructor(props) {
        super(props);
        this.state = {
            taskArray: [],
            filter: "all",
            current: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this)
        this.deleteAllTasks = this.deleteAllTasks.bind(this);
        this.completeAllTasks = this.completeAllTasks.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.completeTask = this.completeTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.restoreCompletedTasks = this.restoreCompletedTasks.bind(this);
    }
    componentDidMount() {
        let array = JSON.parse(localStorage.getItem("taskArray"))
        if (array) {
            this.setState({ taskArray: array })
        }
    }

    componentDidUpdate() {
        localStorage.setItem("taskArray", JSON.stringify(this.state.taskArray));
    }

    print() {
        let list = this.state.taskArray.filter(x => {
            if (this.state.filterBy === "all" && !x.deleted) { return x; }
            if (this.state.filterBy === "active" && !x.completed && !x.deleted) { return x; }
            if (this.state.filterBy === "completed" && x.completed && !x.deleted) { return x; }
        }).map((x, index) => {
            return <Item
                key={index}
                data={x}
                finish={this.completeTask}
                remove={this.deleteTask}
            />
        });
        return list
    }
    addTask(str) {
        if (this.state.current !== "") {
            this.setState(previousState => {
                let pastTasks = previousState.taskArray
                let newList = { id: Date.now(), textValue: this.state.current, completed: false, deleted: false }
                let newState = {
                    taskArray: pastTasks.concat(newList),
                    current: ""
                }
                return newState;
            });
        }
    }
    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.addTask()
        }
    }
        Active() {
        let filteredArr = this.state.taskArray.filter(x => !x.completed && !x.deleted)
        if (filteredArr.length > 1) {
            return filteredArr.length + " items to do";
        } else if (filteredArr.length > 0) {
            return filteredArr.length + " item to do";
        } else {
            return ""
        }
    }

    handleChange(event) {
        this.setState({ current: event.target.value });
    }

    completeTask(id) {
        let newArr = this.state.taskArray.map(x => {
            if (x.id === id) {
                x.completed = !x.completed
            }
            return x;
        });
        this.setState({ taskArray: newArr })
    }
    deleteTask(id) {
        let newArr = this.state.taskArray.map(x => {
            if (x.id === id) {
                x.deleted = !x.deleted
            }
            return x;
        });
        this.setState({ taskArray: newArr })
    }

    restoreCompletedTasks() {
        let newArr = this.state.taskArray.filter(x => x.completed)
        this.setState({ newArr: newArr.map(x => x.completed = false) })
    }

    deleteAllTasks() {
        let newArr = this.state.taskArray.filter(x => x.completed)
        this.setState({ newArr: newArr.map(x => x.deleted = true) })
    }

    completeAllTasks() {
        let newArr = this.state.taskArray.filter(x => !x.completed)
        this.setState({ newArr: newArr.map(x => x.completed = true) })
    }

    render() {
        let tempList = this.print();
        return (
            <div container className='container' max-height='503px'>
                <div className='row border'>
                    <div className='col-lg-6 text-center'>
                        <h3>Add Task</h3>
                        <form>
                            <label>
                                Task:
                                <input
                                    type="text"
                                    value={this.state.current}
                                    placeholder="Laundry"
                                    onChange={this.handleChange}
                                    onKeyPress={this.handleKeyPress}
                                />
                            </label>
                            <button onClick={this.addTask}>Add Task</button>
                        </form>
                    </div>
                    <div className='col-lg-6 text-center mb-2 mb-lg-0 border border-dark'>
                        <div className='row border-bottom border-dark'>
                            <div className='col-lg-4 border'>
                                <button className="btn" onClick={() => this.setState({ filterBy: "all" })}>All</button>
                            </div>
                            <div className='col-lg-4 border'>
                                <button className="btn" onClick={() => this.setState({ filterBy: "completed" })}>Completed</button>
                            </div>
                            <div className='col-lg-4 border'>
                                <button className="btn" onClick={() => this.setState({ filterBy: "active" })}>Active</button>
                            </div>
                            <div className='col-lg-4 border'>
                                <button className="btn" onClick={this.restoreCompletedTasks}>
                                    Restore Completed
                                </button>
                            </div>
                            <div className='col-lg-4 border'>
                                <button className="btn" onClick={this.completeAllTasks}>
                                    Complete All
                                </button>
                            </div>
                            <div className='col-lg-4 border'>
                                 <button className="btn" onClick={this.deleteAllTasks}>
                                    Delete Completed
                                </button>
                            </div>
                        </div>
                        {tempList}
                    </div>
                </div>
            </div>
        )
    }
}