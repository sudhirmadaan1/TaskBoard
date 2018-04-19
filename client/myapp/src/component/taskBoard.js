import React, { Component, Fragment } from 'react';
import AddtoCard from './addCard';
import Dialogue from './dialogue';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialogue: false,
      listVal:'',
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
  onDragStart(e, taskHead, mainIdx, itemIdx, list) {
    console.log('dragstart:', {taskHead, mainIdx, itemIdx, list });

    let data = JSON.stringify({taskHead, mainIdx, itemIdx, list });
    e.dataTransfer.setData("list", data);
  }
  onDragOver = (e) => {
    e.preventDefault();
  }
  onDrop = (e, taskHead, index) => {
    const item = e.dataTransfer.getData('list');
    const parseItem = JSON.parse(item);

    let updatedItems = this.props.list[parseItem.mainIdx].listItems[parseItem.itemIdx];
    
    const updatedSet = this.props.list.map((list) => {
        if(list.taskHead === taskHead) {
          //for adding in list of drop item
          let newList = {
            ...list,
            listItems: [
              ...list.listItems,
              updatedItems
            ] 
          }
          return newList;
        } else if(list.taskHead === parseItem.taskHead) {
          // for slicing the list of drop item
          return {
            ...list,
            listItems:[
              ...list.listItems.slice(0, parseItem.itemIdx),
              ...list.listItems.slice(parseItem.itemIdx+1)
            ]
          };
        } else {
          return list;
        }
    });
    this.props.mutate({variables: { dragName:parseItem.taskHead, dragListIndex:parseItem.itemIdx, dropList:taskHead, listName: parseItem.list.taskName}})
    this.props.updateData(updatedSet);
  }

  render() {
    const updateTask = this.props.updateTask;
    return(
      <div className="task-board-wrapper clearfix">
      <div className="flex-box">
      {this.props.list && this.props.list.map((task, i) => 
        <div className="task-board" key={i} onDragOver={(e)=>this.onDragOver(e)} onDrop={(e) => this.onDrop(e, task.taskHead)}>
          <h2>{task.taskHead}</h2>
          {task.listItems && task.listItems.map((list, idx) =>
          <a href="javascript:void(0)" onDragStart = {(e) => this.onDragStart(e, task.taskHead, i, idx, list )} draggable key={idx} onClick={() => {  this.showModel(task, idx, i) }}>
            {list.taskName}
          </a>
          )}
          <AddtoCard {...this.props}  task={task} index={i} 
            isActive={this.props.activeIndex === i} 
            onClick={(e) => { this.props.handleClick(i, e) }}  />
        </div>
      )}
      

      {this.props.showAddList && <Fragment>
        <form>
          <fieldset>
              <legend><strong>Add List:</strong></legend>
              <label>Task Name: <input type="text" onChange={(e) => {
                this.setState({
                  listVal:e.target.value
                });
              }} /></label>
          </fieldset>
          <button type="button" className="placeholder" onClick={() => {
            this.props.addList(this.state.listVal);
          }}>Add a list...</button>
        </form>
      </Fragment> }
      </div>
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

const CHANGE_POSITION_LIST = gql`
  mutation ChangePositionList($dragName:String!, $dragListIndex:Int!, $dropList:String!, $listName: String!) {
    ChangePositionList(
      dragName: $dragName,
      dragListIndex: $dragListIndex,
      dropList: $dropList,
      listName: $listName
    ){
        taskId
        taskHead
        listItems {
          listId
          taskName
        }
      }
  }
`;

const ChangePositionWithMutation = graphql(CHANGE_POSITION_LIST)(TaskComponent);

export default ChangePositionWithMutation;