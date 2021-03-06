import React from 'react'
import PropTypes from 'prop-types'

function weightRangeCheck(props, propName, componentName) {
    let weight = props[propName];
    
    if (weight === undefined) {
      return new Error("Sorry, you must include a number for weight!");
    }

    if (isNaN(weight)) {
      return new Error("Sorry, weight must be a number!");
    }

    return weight >= 80 && weight <= 300 ? null : new Error("Sorry, weight must be within the range of 80 to 300!");
  } 

export default class Product extends React.Component {
	render() {
	    return (
	      <div className="product">
	        <ul>
	          <li>Name: {this.props.name}</li>
	          <li>Producer: {this.props.producer}</li>
	          <li>Has Watermark?: {this.props.hasWatermark ? 'Yes' : 'No'}</li>
	          <li>Color: {this.props.color}</li>
	          <li>Weight: {this.props.weight}</li>
	        </ul>
	      </div>
	    );
  	}
}

Product.defaultProps = {
	hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,		
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightRangeCheck
} 