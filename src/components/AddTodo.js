//Generated with rce
import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: '',
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input               
                    style={{ flex: '10', padding: '5px' }} 
                    type="text" 
                    name="title" 
                    placeholder="Add Todo.."     
                    value={this.state.title}
                    onChange={this.onChange} 
                />
                <input style={{ flex: '1' }} type="submit" className="btn" value="submit"/>               
            </form>
        )
    }
}

export default AddTodo

