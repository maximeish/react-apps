import React from 'react';
import './css/Tasks.css';

class Tasks extends React.Component {
	constructor() {
		super();
		this.state = {
			newTask: "",
			tasks: [],
			tasksCount: 0,
			noTasks: true
		}
    	
		this.handleChange = this.handleChange.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	noTask = () => {
		if (this.state.tasksCount === 0) {
			this.setState({
				noTasks: true
			})
		} else {
			this.setState({
				noTasks: false
			})
		}
	}

	handleAdd(e, msg = false) {
		const addTask = () => {
			this.setState(prevState => {
				if (prevState.newTask !== "" && prevState.newTask) {
					if (prevState.tasks.length > 0) {
						const indexOflastEl = prevState.tasks.length - 1;
						return {
							newTask: "",
							tasks: [
								...prevState.tasks,
								{
									id: prevState.tasks[indexOflastEl].id + 1,
									task: prevState.newTask,
									isComplete: false
								}
							],
							tasksCount: prevState.tasksCount + 1
						}
					} else {
						return {
							tasks: [
								{
									id: 1,
									task: prevState.newTask,
									isComplete: false
								}
							],
							newTask: "",
							tasksCount: 1,
							noTasks: false
						}
					}
				}
			})
		}

		//check if enter key is pressed
		if (e !== undefined && e.keyCode === 13) addTask();

		//check if add task button is pressed
		if (msg) addTask();
	}

  	handleChange(id = undefined, event = undefined) {
		  if (id) {
			this.setState(prevState => {
			const updatedTasks = prevState.tasks.map(task => {
				if (task.id === id)
				task.isComplete = !task.isComplete;
				return task;
				});
			
			
			return {
				tasks: updatedTasks
			}
			});
		}

		if (event) {
			const { value } = event.target;
			this.setState({
				newTask: value
			});
		}
  	}

	handleDelete(id) {
		this.setState(prevState => {
			for (let [index, task] of prevState.tasks.entries()) {
				if (task.id === id) {
					prevState.tasks.splice(index, 1);
					
					return {
						tasks: prevState.tasks,
						tasksCount: prevState.tasksCount - 1,
						noTasks: prevState.tasksCount - 1 === 0 ? true : false
					}
				}
			}

			return {
				tasks: prevState.tasks
			}
		})
	} 


	render() {
		const taskComponents = this.state.tasks.map((todo, index) => <TaskComponent key={todo.id} todo={todo} handleChange={this.handleChange} handleDelete={this.handleDelete} />);
		return (
			<React.Fragment>
				<div className="warning-msg">
					Do not refresh the page as all your tasks will be removed
				</div>
				<div className="input-task">
					<input
						type="text"
						name="task-txt"
						value={this.state.newTask}
						placeholder="New Task"
						className="task-input"
						onChange={(e) => this.handleChange(undefined, e)}
						onKeyUp={(e) => this.handleAdd(e)}
					/>
					<button className="add-task" onClick={() => this.handleAdd(undefined, true)}>Add Task</button>
				</div>
				<div className="no-task" style={{"display": this.state.noTasks ? "block" : "none"}}>
					 No Tasks Available
				</div>
				<div id="tasks-container">
					{taskComponents}
				</div>
			</React.Fragment>
		)
	};
}


const TaskComponent = props =>
		<React.Fragment>
			<div className="task-box">
				<input
					className="input-checkbox" 
					type="checkbox"
					checked={props.todo.isComplete}
					onChange={() => props.handleChange(props.todo.id)}/>

				<span
					className={props.todo.isComplete ? "task-txt completed" : "task-txt"}>
				{props.todo.task}</span>

				<button className="delete-btn" onClick={() => props.handleDelete(props.todo.id)}>x</button>
			</div>
		</React.Fragment>

export default Tasks;