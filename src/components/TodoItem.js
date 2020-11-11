import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return{
            backgroundColor: 'grey',
            padding: '10px',
            borderBottom: '1px black dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                    {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnDelStyle}>Delete</button>
                </p>
            </div>
        )
    }
}

//Prop Types
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnDelStyle = {
    float: 'right',
    backgroundColor: 'Red',
    border: 'none',
    padding: '10px',
    borderRadius: '10%',
}

export default TodoItem;
