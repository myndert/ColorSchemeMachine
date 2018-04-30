import React, { Component } from 'react';
import ML from '../learning/learningCore.js';

import ColorScheme from './colorScheme.jsx';
import ColorPreview from './colorPreview.jsx';
import Input from './Input.jsx';
import Stars from './stars.jsx'
const Machine = new ML();
import topScheme from './seedData.js'



export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentColors: {
        one: {r: 0, g: 0, b: 0},
        two: {r: 0, g: 0, b: 0},
        three: {r: 0, g: 0, b: 0},
        four: {r: 0, g: 0, b: 0},
      },
      newColors: [],
      oneIsLocked: false,
      twoIsLocked: false,
      threeIsLocked: false,
      fourIsLocked: false,
    };
    this.changeRating = this.changeRating.bind(this);
    this.setNextColor = this.setNextColor.bind(this);
    this.colorOnChange = this.colorOnChange.bind(this);
    this.lockClickHandler = this.lockClickHandler.bind(this);

  }


  componentWillMount(){
    Machine.setTestData(topScheme);
    let currentColors = Machine.randomColor();
    this.setState({currentColors});
  }

  lockClickHandler(evt) {
  if ( evt.target.id === 'lockOne'){
		this.setState(function(prevState) {
			return {oneIsLocked: !prevState.oneIsLocked};
    });
  }
  if ( evt.target.id === 'lockTwo'){
		this.setState(function(prevState) {
			return {twoIsLocked: !prevState.twoIsLocked};
    });
  }
  if ( evt.target.id === 'lockThree'){
		this.setState(function(prevState) {
			return {threeIsLocked: !prevState.threeIsLocked};
    });
  }
    if ( evt.target.id === 'lockFour'){
		this.setState(function(prevState) {
			return {fourIsLocked: !prevState.fourIsLocked};
    });
  }
  }

  colorOnChange(evt){
    if (evt.target.id === 'one'){
      let currentColors = {...this.state.currentColors}
      currentColors.one = (this.hexToRgb(evt.target.value));
      this.setState({currentColors});
    }
    if (evt.target.id === 'two'){
      let currentColors = {...this.state.currentColors}
      currentColors.two = (this.hexToRgb(evt.target.value));
      this.setState({currentColors});
    }
    if (evt.target.id === 'three'){
      let currentColors = {...this.state.currentColors}
      currentColors.three = (this.hexToRgb(evt.target.value));
      this.setState({currentColors});
    }
    if (evt.target.id === 'four'){
      let currentColors = {...this.state.currentColors}
      currentColors.four = (this.hexToRgb(evt.target.value));
      this.setState({currentColors});
    }
  }

  hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
  }

  changeRating( newRating ) {
    this.setNextColor( newRating );
  }

  setNextColor(newRating){

    let arg1 = undefined;
    let arg2 = undefined;
    let arg3 = undefined;
    let arg4 = undefined;

    if (this.state.oneIsLocked){
      arg1 = (this.state.currentColors.one)
    }
    if (this.state.twoIsLocked){
      arg2 = (this.state.currentColors.two)
    }
    if (this.state.threeIsLocked){
      arg3 = (this.state.currentColors.three)
    }
    if (this.state.fourIsLocked){
      arg4 = (this.state.currentColors.four)
    }

    Machine.insertTestData(this.state.currentColors, newRating );

    let newColors = Machine.brain(arg1, arg2, arg3, arg4);

    let currentColors = newColors.shift();
    this.setState({ newColors, currentColors });
  }


  render(){

    return (
      <div className="container">
        <h3 className="center-align" style={{fontFamily: 'Arial Black'}}> Color Theme Generator</h3>
        <h6 className="center-align"> Powered by Brain.js! </h6>
        <br />

        <ColorScheme currentColors={this.state.currentColors} />
        <div className="center-align">
        <br />

        <Input
        currentColors={this.state.currentColors}
        colorOnChange={this.colorOnChange}
        lockClickHandler={this.lockClickHandler}
        oneIsLocked={this.state.oneIsLocked}
        twoIsLocked={this.state.twoIsLocked}
        threeIsLocked={this.state.threeIsLocked}
        fourIsLocked={this.state.fourIsLocked}
        copyOnClick={this.copyOnClick}
        />

        <br />
        <h5>How much will you rank this theme?</h5>
        <Stars changeRating={this.changeRating} />
        </div>
        <div className="center-align">
        <br />
        <p>This machine learns by reading your ranking for each color theme it suggested!</p>
        <p>The recommendations will improve over time</p>
        </div>
        <br />
        <hr style={{borderColor: 'black'}} />
        <div className="row" >
        {this.state.newColors ? this.state.newColors.map(( color ) => {
          return (
          <div key={color.one.r.toString() + color.two.g + color.three.b + color.four.r} className="col m3" style={{margin: '20px'}}>
          <ColorPreview currentColors={color} />
          </div>
          )
        })
       : (
          <div />
        )
      }
      </div>
      </div>

    );
  }
}
