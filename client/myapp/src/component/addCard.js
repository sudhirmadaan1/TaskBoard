import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddtoCard extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return(
      <div>
        {!this.props.showCard && <a href="#" className="add-card" onClick={this.props.handleClick}>Add a card...</a>}
        {this.props.showCard && 
        <form id="noter-save-form" method="POST">
          <textarea id="noter-text-area" name="textarea" value=""></textarea>
          <input type="submit" value="Add" className="add-button" />
          <input type="submit" value="Cancel" className="add-button" />
        </form>}
      </div>
    )
  }
}

AddtoCard.propTypes = {
  handleClick: PropTypes.func.isRequired,
  showCard:PropTypes.bool.isRequired
}

export default AddtoCard;