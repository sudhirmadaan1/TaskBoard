import React, { Component } from 'react';
import 'babel-polyfill';
import './App.css';
import AddtoCard from './component/addCard';
import config from './config';

const TaskComponent = (props) => {
  return(
    <div className="task-board">
      <h2>{props.taskHead}</h2>
      {props.listItems.map((list) =>
       <p key={list.taskName}>
        {list.taskName}
       </p>
      )}
      <AddtoCard {...props} />
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: config.toDoList,
      isAddToCardShow:false
    }
    this.showAddToCard = this.showAddToCard.bind(this);
  }
  componentDidMount () {
    // need to add Api Call
  }
  showAddToCard () {
    this.setState({
      isAddToCardShow:true
    });
  }
  render() {
    return(
      <div className="task-board-wrapper clearfix">
          {this.state.list.map((task, i) => 
            <TaskComponent {...task} key={i} showCard={this.state.isAddToCardShow} handleClick={this.showAddToCard} />
          )}
       <button type="button" className="placeholder">Add a list...</button>
      </div>
    )
  }
}

export default App;
