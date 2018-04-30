import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { ProductCardView } from '../index.js';
// import { addOrUpdateCart } from '../../store/index.js'
// need to add prop components into ProductCardView
import { Link } from 'react-router-dom'
import { Navbar, NavItem, Icon, Dropdown } from 'react-materialize'



export class ColorScheme extends Component {

  constructor(props){
    super(props);

  }

  render() {

    const {one, two, three, four, five} = this.props.currentColors;
    const colorOne = `rgb(${one.r}, ${one.g}, ${one.b})`;
    const colorTwo = `rgb(${two.r}, ${two.g}, ${two.b})`;
    const colorThree = `rgb(${three.r}, ${three.g}, ${three.b})`;
    const colorFour = `rgb(${four.r}, ${four.g}, ${four.b})`

    // const { currentItem, deleteClickHandler, handleQtyChange } = this.props;
    return (
      <div className="container" style={{width:'800px'}}>
      <nav style={{background: `rgb(${one.r}, ${one.g}, ${one.b})`}}>
    <div className="nav-wrapper">
      <Link to="#" className="brand-logo valign-wrapper" style={{color: colorTwo}}><i className="material-icons" style={{color: colorTwo}}>cloud</i>Logo</Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="#"><i className="material-icons" style={{color: colorTwo}}>search</i></Link></li>
        <li><Link to="#"><i className="material-icons" style={{color: colorTwo}}>view_module</i></Link></li>

        <li>
        <Dropdown
        trigger={
        <a><i className="material-icons" style={{color: colorTwo}}>refresh</i></a>
        }
        options={{ belowOrigin: true, hover: true }}
        >
        <Link to={'#'} style={{background: colorTwo}}><i className="material-icons" style={{color: colorOne}}>account_box</i></Link>
         <Link to={'#'} style={{background: colorTwo}}><i className="material-icons" style={{color: colorOne}}>add_circle</i></Link>
         <Link to={'#'} style={{background: colorTwo}}><i className="material-icons" style={{color: colorOne}}>add_to_photo</i></Link>
         </Dropdown>
        </li>
        <li>
        <Dropdown
        trigger={
        <a><i className="material-icons" style={{color: colorTwo}}>more_vert</i></a>
        }
        options={{ belowOrigin: true, hover: true }}
        >
        <Link to={'#'} style={{background: colorOne}}><i className="material-icons" style={{color: colorTwo}}>account_box</i></Link>
         <Link to={'#'} style={{background: colorOne}}><i className="material-icons" style={{color: colorTwo}}>add_circle</i></Link>
         <Link to={'#'} style={{background: colorOne}}><i className="material-icons" style={{color: colorTwo}}>add_to_photo</i></Link>
         </Dropdown>
        </li>
      </ul>
      </div>
      </nav>

      <div id="three" className="center-align" style={{background: `rgb(${three.r}, ${three.g}, ${three.b})`, height: '375px'}}>
      <br />
      <h3 style={{margin: 0, padding: 0, color:colorFour}}>Very Interesting Title</h3>
      <br />
      <hr style={{borderColor: colorFour}}/>
      <br />
      <div className="container">
      <p style={{color: colorFour}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla molestie lorem at enim pharetra, ut laoreet lorem sagittis. In egestas erat et pulvinar scelerisque. Phasellus a nibh ut nisi consectetur laoreet sed ac eros. Nam tristique diam ac enim consectetur vehicula. Nulla risus ipsum, tristique quis aliquet non, finibus vitae dui. Suspendisse potenti. Phasellus eget odio dolor. Curabitur fringilla vulputate enim vitae volutpat. Nulla pretium, lorem vel pulvinar sollicitudin, augue libero fermentum purus, at congue nibh odio in mauris. Praesent sodales dignissim felis nec facilisis. Aliquam scelerisque ornare cursus. Etiam sed est dui. Cras id est tempus, pharetra velit nec, semper orci.</p>
      </div>
      </div>

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
)(ColorScheme);
