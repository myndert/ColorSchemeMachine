import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { ProductCardView } from '../index.js';
// import { addOrUpdateCart } from '../../store/index.js'
// need to add prop components into ProductCardView
import { Link } from 'react-router-dom'
import { Button, Icon, Table } from 'react-materialize'



export class Input extends Component {

  constructor(props){
    super(props);


  }

  componentWillMount(){

  }

  componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  rgbToHex(r, g, b) {
    return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
  }

  render() {

    const {one, two, three, four} = this.props.currentColors;
    const colorOne = `rgb(${one.r}, ${one.g}, ${one.b})`;
    const colorTwo = `rgb(${two.r}, ${two.g}, ${two.b})`;
    const colorThree = `rgb(${three.r}, ${three.g}, ${three.b})`;
    const colorFour = `rgb(${four.r}, ${four.g}, ${four.b})`;
    const colorOneHex = this.rgbToHex(one.r, one.g, one.b);
    const colorTwoHex = this.rgbToHex(two.r, two.g, two.b);
    const colorThreeHex = this.rgbToHex(three.r, three.g, three.b);
    const colorFourHex = this.rgbToHex(four.r, four.g, four.b);


    return (
      <div className="container">
      <Table className="center-align">
      <tbody>
      <tr>
      <td>Navbar Background: </td>
      <td><input id="one" type="color" defaultValue={colorOneHex} onChange={this.props.colorOnChange} /></td>
      <td>{colorOne}</td>
      <td><Button id="lockOne" waves="light" onClick={this.props.lockClickHandler} ><Icon center>{this.props.oneIsLocked ? 'lock_open' : 'lock'}</Icon></Button></td>
      </tr>
      <tr>
      <td>Navbar Text: </td>
      <td><input id="two" type="color" defaultValue={colorTwoHex} onChange={this.props.colorOnChange} /></td>
      <td>{colorTwo}</td>
      <td><Button id="lockTwo" waves="light" onClick={this.props.lockClickHandler} ><Icon center>{this.props.twoIsLocked ? 'lock_open' : 'lock'}</Icon></Button></td>
      </tr>
      <tr>
      <td>Main Background: </td>
      <td><input id="three" type="color" defaultValue={colorThreeHex} onChange={this.props.colorOnChange} /></td>
      <td>{colorThree}</td>
      <td><Button id="lockThree" waves="light" onClick={this.props.lockClickHandler} ><Icon center>{this.props.threeIsLocked ? 'lock_open' : 'lock'}</Icon></Button></td>
      </tr>
      <tr>
      <td>Navbar Background: </td>
      <td><input id="four" type="color" defaultValue={colorFourHex} onChange={this.props.colorOnChange} /></td>
      <td>{colorFour}</td>
      <td><Button id="lockFour" waves="light" onClick={this.props.lockClickHandler} ><Icon center>{this.props.fourIsLocked ? 'lock_open' : 'lock'}</Icon></Button></td>
      </tr>
      </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    // products: state.products,
    // reviews: state.reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // updateCart(id, qty) {
    //   dispatch(addOrUpdateCart(id, qty));
    // },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
