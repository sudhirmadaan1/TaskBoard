import React, { Component } from 'react';
import {addTask} from '../component/helper';
import PropTypes from 'prop-types';
import {partial} from '../lib/utils';

class AddtoCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.onChange = this.onChange.bind(this);
    this.resetState = this.resetState.bind(this);
  }
  onChange (e) {
    this.setState({value: e.target.value});
  }
  resetState (e, callback) {
    e.preventDefault();
    this.setState({
      value:''
    });
    callback();
  }
  render() {
    const getIndex = this.props.list.findIndex((list) => list.id === this.props.task.id);
    const addUpdatedTask = addTask(this.props.task.listItems, this.state.value, getIndex);
    const handleAdd =  partial(this.props.handleAdd, addUpdatedTask);
    return(
      <div>
        {!this.props.isActive && <a href="javscript:void(0)" className="add-card" onClick={this.props.onClick}>Add a card...</a>}
        {this.props.isActive && 
        <form id="noter-save-form" method="POST">
          <textarea 
            onChange={this.onChange}
            value={this.state.value} />
          <button type="button" className="add-button" 
            onClick={(e) => { this.resetState(e, handleAdd) }}>Add</button>
          <button type="button" className="cancel-button" onClick={this.props.onClick} >Cancel</button>
        </form>}
      </div>
    )
  }
}

AddtoCard.propTypes = {
  handleAdd:PropTypes.func.isRequired,
  textVal:PropTypes.string.isRequired
}

export default AddtoCard;