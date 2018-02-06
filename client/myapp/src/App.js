import React, { Component, Fragment } from 'react';
import 'babel-polyfill';
import './App.css';
import config from './config';
import PropTypes from 'prop-types';
import TaskComponent from './component/taskBoard';


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
    this.updateTask = this.updateTask.bind(this);
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
  updateTask (list) {
    console.log(list);
  }
  render() {
    const displayItems = this.state.list;
    return(
        <TaskComponent list={displayItems} 
          handleAdd={this.handleAdd}
          textVal={this.state.initVal}
          activeIndex={this.state.activeIndex}
          handleClick={this.handleClick}
          updateTask={this.updateTask}
        />
    )
  }
}

export default App;
