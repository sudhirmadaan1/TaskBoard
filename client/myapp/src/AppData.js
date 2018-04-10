import React, { Component } from 'react';
import 'babel-polyfill';
import './App.css';
import TaskComponent from './component/taskBoard';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class AppData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      activeIndex:null,
      initVal: '',
      showAddList: true
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.addNewList = this.addNewList.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list:this.props.listData.getTaskBoard,
        addList: this.props.addList
      })
    }, 1500);
  }
  handleClick  (idx, e) { 
   idx = e.currentTarget.className === 'cancel-button' ? null : idx;
   this.setState({ activeIndex: idx })
  }
  handleAdd (updatedData) {
    let updatedList = [...this.state.list.slice(0, updatedData.idx), updatedData.newValues, ...this.state.list.slice(updatedData.idx+1)]
    this.setState({
      list: updatedList,
      activeIndex:null
    });
  }
  updateTask (list, itmIdx) {
    let updatedList = [...this.state.list.slice(0, itmIdx), list, ...this.state.list.slice(itmIdx+1)];
    
    this.setState({
      activeIndex:null,
      list: updatedList
    });
  }
  addNewList(listVal) {
    const taskHead = listVal;
    this.props.addList({variables: { taskHead }}).then((list) => {
      const _newData = list.data.AddNewList;
      const newObj = {id: _newData.id, taskHead:_newData.taskHead, listItems:[]} 
      this.setState({
        list:[...this.state.list, newObj]
      });
    }).catch((error) => {
      console.log(`There is an error. ${error}`)
    });

  }
  render() {
    const { loading } = this.props.listData;
    if(loading) {
      return(
        <div className="loading">Content is being rendered</div>
      )
    } else {
      return(
          <TaskComponent list={this.state.list} 
            handleAdd={this.handleAdd}
            textVal={this.state.initVal}
            activeIndex={this.state.activeIndex}
            handleClick={this.handleClick}
            updateTask={this.updateTask}
            addList={this.addNewList}
            showAddList={this.state.showAddList}
          />
      )
    }
  }
}

const GET_TASK_BOARD = gql`
  query GetTaskBoard {
    getTaskBoard {
      taskId
      taskHead
      listItems {
        listId
        taskName
      }
    }
  }
`;

const ADD_LIST = gql`
  mutation AddNewList($taskHead: String!) {
    AddNewList(taskHead: $taskHead) {
      taskId
      taskHead
    }
  }
`;

export default compose(
  graphql(GET_TASK_BOARD, {name: 'listData'}),
  graphql(ADD_LIST, {name: 'addList'})
)(AppData)
