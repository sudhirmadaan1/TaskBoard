import React, { Component, Fragment } from 'react';
import 'babel-polyfill';
import './App.css';
import AddtoCard from './component/addCard';
import config from './config';
import PropTypes from 'prop-types';

const TaskComponent = (props) => {
  return(
    <div className="task-board-wrapper clearfix">
    {props.list.map((task, i) => 
      <div className="task-board" key={i}>
        <h2>{task.taskHead}</h2>
        {task.listItems.map((list) =>
        <p key={list.taskName}>
          {list.taskName}
        </p>
        )}
        <AddtoCard {...props}  task={task} index={i} 
          isActive={props.activeIndex === i} 
          onClick={(e) => { props.handleClick(i, e) }}  />
      </div>
    )}
    <button type="button" className="placeholder">Add a list...</button>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: config.toDoList,
      activeIndex:null,
      initVal: ''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    // need to add Api Call
  }
  handleClick  (idx, e) { 
   idx = e.currentTarget.className === 'cancel-button' ? null : idx;
   this.setState({ activeIndex: idx })
  }
  handleAdd (newList) {
    this.state.list[newList.idx].listItems.splice(2, 0, newList);
    this.setState({
      list: this.state.list,
      activeIndex:null
    });
  }
  render() {
    const displayItems = this.state.list;
    return(
        <TaskComponent list={displayItems} 
          handleAdd={this.handleAdd}
          textVal={this.state.initVal}
          activeIndex={this.state.activeIndex}
          handleClick={this.handleClick}
        />
    )
  }
}

export default App;
