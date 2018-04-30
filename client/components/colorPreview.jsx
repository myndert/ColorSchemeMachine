import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { ProductCardView } from '../index.js';
// import { addOrUpdateCart } from '../../store/index.js'
// need to add prop components into ProductCardView
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon, Table } from 'react-materialize'



export class ColorPreview extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentColor: {
        one: {r: 0, g: 0, b: 0},
        two: {r: 0, g: 0, b: 0},
        three: {r: 0, g: 0, b: 0},
        four: {r: 0, g: 0, b: 0},
      }
    };

  }

  componentWillMount(){
    this.setState({currentColor: this.props.currentColors})
  }

  render() {

    const {one, two, three, four} = this.state.currentColor;
    const colorOne = `rgb(${one.r}, ${one.g}, ${one.b})`;
    const colorTwo = `rgb(${two.r}, ${two.g}, ${two.b})`;
    const colorThree = `rgb(${three.r}, ${three.g}, ${three.b})`;
    const colorFour = `rgb(${four.r}, ${four.g}, ${four.b})`

    // const { currentItem, deleteClickHandler, handleQtyChange } = this.props;
    return (
      <div className="container" style={{width:'300px'}}>
      <nav style={{background: `rgb(${one.r}, ${one.g}, ${one.b})`}}>
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo valign-wrapper" style={{color: colorTwo}}><i className="material-icons" style={{color: colorTwo}}>cloud</i>Logo</Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="#"><i className="material-icons" style={{color: colorTwo}}>view_module</i></Link></li>
        <li><Link to="#"><i className="material-icons" style={{color: colorTwo}}>refresh</i></Link></li>
        <li><Link to="#"><i className="material-icons" style={{color: colorTwo}}>more_vert</i></Link></li>
      </ul>
      </div>
      </nav>

      <div id="three" className="center-align" style={{background: `rgb(${three.r}, ${three.g}, ${three.b})`, height: '250px'}}>
      <br />
      <h5 style={{margin: 0, padding: 0, color: colorFour}}>Very Interesting Title</h5>
      <br />
      <hr style={{borderColor: colorFour}} />
      <br />
      <div className="container">
      <p style={{color: colorFour}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie lorem at enim pharetra, ut laoreet lorem sagittis. In egestas erat et pulvinar scelerisque.</p>
      </div>
      </div>
      <Table className="center-align">
      <tbody>
      <tr>
      <td>Navbar Background: </td>
      <td>{colorOne} </td></tr>
      <tr>
      <td>Navbar Text: </td>
      <td>{colorTwo} </td></tr>
      <tr>
      <td>Main Background: </td>
      <td>{colorThree} </td></tr>
      <tr>
      <td>Main Text: </td>
      <td>{colorFour} </td></tr>
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
)(ColorPreview);
