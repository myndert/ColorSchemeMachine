import React, { Component } from 'react';
import ML from '../learning/learningCore.js';

import ColorScheme from './colorScheme.jsx';
const Machine = new ML();


export default class Home extends Component {

  constructor(props){
    super(props);

    this.state = {
      bgColor: '#ff0000',
      textColor: 'white',
      rgb: {r: 'ff', g: '00', b: '00'},
      chance: 0,
      currentColor: {
        one: {r: 0, g: 0, b: 0},
        two: {r: 0, g: 0, b: 0},
        three: {r: 0, g: 0, b: 0},
        four: {r: 0, g: 0, b: 0},
      }
    };
    this.clickHandler = this.clickHandler.bind(this);
  }


  componentWillMount(){
    let {r, g, b, rgb } = Machine.randomRGB();
    let textColor = Machine.randomText();
    let currentColor = Machine.randomColor();
    this.setState({bgColor: rgb, textColor, rgb: {r, g, b}, currentColor});
  }

  clickHandler(event){

    let text = '';

    if (this.state.textColor === 'white' && event.target.value === 'ok')
    {
        text = 'white';
    }
    else if (this.state.textColor === 'white' && event.target.value === 'no'){
        text = 'black';
      }
    else if (this.state.textColor === 'black' && event.target.value === 'no'){
        text = 'white';
    }
      else {
        text = 'black';
      }

    Machine.insertData({rgb: this.state.rgb, text});

    // get color for next round
    let {r, g, b, rgb } = Machine.randomRGB();
    let trainResult = Machine.trainBrain({rgb: {r, g, b }});
    let textColor = trainResult.color;
    let chance = trainResult.chance;

    //set change color
    this.setState({bgColor: rgb, textColor, rgb: {r, g, b}, chance});

  }


  render(){
    return (
      <div className="container">
        <h3 className="center-align" style={{fontFamily: 'Arial Black'}}> Black or white text?</h3>
        <h6 className="center-align"> Powered by Brain.js! </h6>
        <br />
        <div className="row" style={{width: '800px'}}>
      <div className="center-align">

        <ColorScheme currentColor={this.state.currentColor} />

        </div>
      </div>
        <br />

        <div id="example" className="center-align" style={{padding: '100px', background: this.state.bgColor, color: this.state.textColor}}>
          <table className = "striped centered">
            <thead>
              <tr>
                <th style={{fontSize: '26px'}}> Example Text </th>
                <th style={{fontSize: '36px'}}> Example Text </th>
                <th style={{fontSize: '46px'}}> Example Text </th>
              </tr>
            </thead>
          </table>
        </div>
        <br /><br />

        <div className="center-align">
          <h5>How do you like the text with this background color? </h5>
          <button className="waves-effect waves-light btn-small" onClick={this.clickHandler} value="ok"><i className ="material-icons left">thumb_up</i>I Like This</button>
          <button className="waves-effect waves-light btn-small" style={{marginLeft: '15px'}} onClick={this.clickHandler} value="no"><i className ="material-icons right">thumb_down</i>I Hate This</button>
        </div>

        <br />
        <div className="center-align">
          {this.state.chance !== 0 ? <div> I am {this.state.chance}% sure </div>
        : <div />}
        </div>
      </div>
    );
  }
}
