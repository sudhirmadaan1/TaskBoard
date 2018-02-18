import React, { Component, Fragment } from 'react';
import 'babel-polyfill';
import './App.css';
import PropTypes from 'prop-types';
import TaskComponent from './component/taskBoard';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class AppData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null,
      activeIndex:null,
      initVal: ''
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateTask = this.updateTask.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        list:this.props.data.getTaskBoard
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
    let updatedList = [...this.state.list.slice(0, itmIdx), list, ...this.state.list.slice(itmIdx+1)]
    
    this.setState({
      activeIndex:null,
      list: updatedList
    });
  }
  render() {
    const displayList = this.state.list;
    const { loading } = this.props.data;
    if(loading) {
      return(
        <div className="loading">Content is being rendered</div>
      )
    } else {
      return(
          <TaskComponent list={displayList} 
            handleAdd={this.handleAdd}
            textVal={this.state.initVal}
            activeIndex={this.state.activeIndex}
            handleClick={this.handleClick}
            updateTask={this.updateTask}
          />
      )
    }
  }
}

export const GET_TASK_BOARD = gql`
  query GetTaskBoard {
    getTaskBoard {
      id
      taskHead
      listItems {
        id
        taskName
      }
    }
  }
`;


export default graphql(GET_TASK_BOARD)(AppData);
