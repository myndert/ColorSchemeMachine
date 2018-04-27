import brain from 'brain.js';


class learningCore {

  constructor() {
    this.network = new brain.NeuralNetwork();
    this.data = [];
    this.trainBrain = this.trainBrain.bind(this);
  }


  randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return { r, g, b, rgb: 'rgb(' + r + ', ' + g + ', ' + b + ')'
    };
  }

  randomColor(){
    let one = this.randomRGB();
    let two = this.randomRGB();
    let three = this.randomRGB();
    let four = this.randomRGB();

    return {one, two, three, four};
  }

  randomText() {
    let num = Math.round(Math.random());
    return num == 1 ? 'black' : 'white';
  }

  rgbConverter(inputData){
    inputData.rgb.r = Math.round(parseInt(inputData.rgb.r) / 2.55) / 100;
    inputData.rgb.g = Math.round(parseInt(inputData.rgb.g) / 2.55) / 100;
    inputData.rgb.b = Math.round(parseInt(inputData.rgb.b) / 2.55) / 100;
    return inputData.rgb;
  }

  insertData(inputData){

    let tempData = {};
    let rgb = this.rgbConverter(inputData);

    if ( inputData.text === 'white'){
      tempData = {input: rgb, output: {light: 1, dark: 0}};
    }
    else {
      tempData = {input: rgb, output: {light: 0, dark: 1}};
    }

    this.data.push(tempData);
    if (this.data.length > 20){
      this.data.shift();
    }

  }

  trainBrain(inputData) {
    if (this.data.length < 3){
      return {color: this.randomText(), chance: 0};
    }
    else {
    let rgb = this.rgbConverter(inputData);

    // this.network.train(this.data, {log: true});
    this.network.train(this.data);
    const result = this.network.run(rgb);

    console.log('my result is: ', result);

    if (result.light > result.dark){
      let chance = (Math.round(result.light * 100) );
      return {color: 'white', chance};
    }
    else {
      let chance = (Math.round(result.dark * 100) );
      return {color: 'black', chance};
    }

    }

  }

}

module.exports = learningCore;
