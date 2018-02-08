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
  componentDidMount() {
    this.callApi()
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/getData');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  }
  handleClick  (idx, e) { 
   idx = e.currentTarget.className === 'cancel-button' ? null : idx;
   this.setState({ activeIndex: idx })
  }
  handleAdd (newList) {
    let listItem = this.state.list[newList.idx].listItems; 
    listItem.splice(listItem.length, 0, newList);
    this.setState({
      list: this.state.list,
      activeIndex:null
    });
  }
  updateTask (list) {
    let taskList = this.state.list[list.idx].listItems;
    let listItemIndex = this.state.list[list.idx].listItems.findIndex((newList) => newList.id === list.oldVal.id); 
    taskList[listItemIndex]['taskName'] = list.newVal; 
   
    this.setState({
      activeIndex:null,
      list: this.state.list
    });
  }
  render() {
    const displayItems = this.state.list;
    console.log(displayItems);
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
