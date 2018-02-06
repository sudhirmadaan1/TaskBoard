import React, { Component, Fragment } from 'react';
import AddtoCard from './addCard';
import Dialogue from './dialogue';

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialogue: false,
      renderDialogueData:{}
    }
    this.showModel = this.showModel.bind(this);
    this.hideModel = this.hideModel.bind(this);
  }
  showModel(list,idx) {
    this.setState({
      showDialogue:true,
      index:idx,
      renderDialogueData:list
    });
  }
  hideModel(list, callback, isUpdateItem) {
    if(isUpdateItem) {
      callback(list);
    }
    this.setState({
      showDialogue:false
    })
  }
  render() {
    const updateTask = this.props.updateTask;
    return(
      <div className="task-board-wrapper clearfix">
      {this.props.list.map((task, i) => 
        <div className="task-board" key={i}>
          <h2>{task.taskHead}</h2>
          {task.listItems.map((list) =>
          <a href="javascript:void(0)" key={list.taskName} onClick={() => { this.showModel(list, i) }}>
            {list.taskName}
          </a>
          )}
          <AddtoCard {...this.props}  task={task} index={i} 
            isActive={this.props.activeIndex === i} 
            onClick={(e) => { this.props.handleClick(i, e) }}  />
        </div>
      )}
      <button type="button" className="placeholder">Add a list...</button>
      <Dialogue showDialogue={this.state.showDialogue} 
            data={this.state.renderDialogueData} 
            index={this.state.index}
            hideModel={this.hideModel}
            updateList={(list) => {this.hideModel(list, updateTask, true)}}
            date="2018-08-01"  />
      </div>
    )
  }
}

export default TaskComponent;