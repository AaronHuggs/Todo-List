import React, {Component} from "react";

class InputTodo extends Component {
    state = {
        title: ""
    };

    textChange = e => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim()) {
            this.props.addTodoProps(this.state.title);
            this.setState({
                title: "",
            });
        }
        else {
            alert("Item cannot be empty");
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type='text'
                    className="input-text"
                    placeholder='Add Todo...'
                    value={this.state.title}
                    name='title'
                    onChange={this.textChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo;