import React, {Component} from 'react';
import { connect } from 'react-redux';
// import { ProductCardView } from '../index.js';
// import { addOrUpdateCart } from '../../store/index.js'
// need to add prop components into ProductCardView
import { Link } from 'react-router-dom'



export class Stars extends Component {

  constructor(props){
    super(props);
    this.setStar = this.setStar.bind(this);
  }

  setStar(){
    console.log('oneStar')
  }


  render() {


    const star = {
      background: 'none',
      border: 'none',
      color: '#999',
      cursor: 'pointer',
      fontSize: '18pt',
      margin: 0,
      outline: 'none',
      padding: 0,
    }
    const star_gold = {
      color: 'goldenrod',
    }


    // stars.forEach((star, i) => {
    //   const score = i / 4
    //   star.addEventListener("mouseenter", setStars.bind(setStars, i))
    //   star.addEventListener("mouseleave", clearStars)
    //   star.addEventListener("click", saveTrainingData.bind(saveTrainingData, score))
    // })

    // const { currentItem, deleteClickHandler, handleQtyChange } = this.props;
    return (
      <div>
      <button style={star} className="star" id="star1" onMouseEnter={() => this.setStar(0)}>★</button>
      <button style={star} className="star" id="star2">★</button>
      <button style={star} className="star" id="star3">★</button>
      <button style={star} className="star" id="star4">★</button>
      <button style={star} className="star" id="star5">★</button>
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
)(Stars);
