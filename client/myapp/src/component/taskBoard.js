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
  showModel(list,idx, itemIdx) {
    this.setState({
      showDialogue:true,
      index:idx,
      itemIdx:itemIdx,
      renderDialogueData:list
    });
  }
  hideModel(list, callback, isUpdateItem, itmIdx) {
    if(isUpdateItem) {
      callback(list, itmIdx);
    }
    this.setState({
      showDialogue:false
    })
  }
  render() {
    const updateTask = this.props.updateTask;
    return(
      <div className="task-board-wrapper clearfix">
      {this.props.list && this.props.list.map((task, i) => 
        <div className="task-board" key={i}>
          <h2>{task.taskHead}</h2>
          {task.listItems.map((list, idx) =>
          <a href="javascript:void(0)" key={list.taskName} onClick={() => { this.showModel(task, idx, i) }}>
            {list.taskName}
          </a>
          )}
          <AddtoCard {...this.props}  task={task} index={i} 
            isActive={this.props.activeIndex === i} 
            onClick={(e) => { this.props.handleClick(i, e) }}  />
        </div>
      )}
      <button type="button" className="placeholder">Add a list...</button>
      {this.state.showDialogue && <Dialogue showDialogue={this.state.showDialogue} 
            data={this.state.renderDialogueData}
            itemIdx={this.state.itemIdx} 
            index={this.state.index}
            hideModel={this.hideModel}
            updateList={(list, itmIdx) => {this.hideModel(list, updateTask, true, itmIdx)}}
            date="2018-08-01"  />}
      </div>
    )
  }
}

export default TaskComponent;