import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import PropTypes from 'prop-types';


class Dialogue extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: props.data['listItems'][props.index].taskName,
      startDate: moment(this.props.date)
    }
    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
    this.saveData = this.saveData.bind(this);
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  onChange(e) {
    this.setState({
      inputVal:e.target.value
    });
  }
  saveData() {
    let listData = JSON.parse(JSON.stringify(this.props.data));
    // let newVal = [...this.props.data.listItems.slice(0, this.props.index), {...this.props.data.listItems[this.props.index], ['taskName']: this.state.inputVal}]
    // let newVales = [...this.props.data.listItems, {...this.props.data.listItems[this.props.index], ['taskName']: this.state.inputVal}]
    listData.listItems[this.props.index].taskName = this.state.inputVal; 
    this.props.updateList(listData, this.props.itemIdx);
  }
  render() {
    return(
    <div>
      {this.props.showDialogue && 
      <div className="model-wrapper" >
            <h1> Task title </h1>
            <textarea 
                  value={this.state.inputVal}
                  onChange={this.onChange} />
            <span className="calender">
              <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange} />
              <i className="font-icons icon-calendar" />
              Due Date
            </span>
            <div className="button-wrapper">
              <button type="button" className="cancel-dialogue" onClick={this.props.hideModel}>Cancel</button>
              <button type="button" className="save-dialogue" onClick={this.saveData}>Save</button>
            </div>
          </div>
        }
    </div>
    )
  }
}

Dialogue.propTypes = {
  showDialogue:PropTypes.bool.isRequired,
  hideModel:PropTypes.func.isRequired,
  data:PropTypes.object.isRequired
}

export default Dialogue; 