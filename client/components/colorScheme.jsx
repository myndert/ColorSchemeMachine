import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { ProductCardView } from '../index.js';
// import { addOrUpdateCart } from '../../store/index.js'
// need to add prop components into ProductCardView
import { Link } from 'react-router-dom'



export class ColorScheme extends Component {

  constructor(props){
    super(props);

  }

  // componentDidMount() {
  //   // this.props.loadProducts();
  // }

  // onChange(evt){
  //   this.setState({qty: evt.target.value, dirty: true})
  // }

  // handleQty(evt){
  //   evt.preventDefault();
  //   this.props.updateCart(this.props.currentItem.id, Number(evt.target.value))
  // }

  // handleSubmit(evt){
  //   evt.preventDefault();
  //   if (this.state.dirty){
  //   this.props.updateCart(this.props.currentItem.id, Number(this.state.qty))
  //   }
  // }

  render() {

    const { currentColor } = this.props;
    console.log(this.props)
    const {one, two, three, four} = currentColor

    // const { currentItem, deleteClickHandler, handleQtyChange } = this.props;
    return (
      <div>
      <div className="col s3">
      <div id="one" className="center-align" style={{background: `rgb(${one.r}, ${one.g}, ${one.b})`, height: '150px'}}></div>
      <div id="two" className="center-align" style={{background: `rgb(${one.r}, ${two.g}, ${two.b})`, height: '100px'}}></div>
      <div id="three" className="center-align" style={{background: `rgb(${three.r}, ${three.g}, ${three.b})`, height: '75px'}}></div>
      <div id="four" className="center-align" style={{background: `rgb(${four.r}, ${four.g}, ${four.b})`, height: '75px'}}></div>
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
