import brain from 'brain.js';

//seed file formate
// [ {input: {
//   one: {r: 0, g: 0, b: 0},
//   two: {r: 0, g: 0, b: 0},
//   three: {r: 0, g: 0, b: 0},
//   four: {r: 0, g: 0, b: 0},
// }, output: [5] },
// { input: {
//   one: {r: 255, g: 255, b: 255},
//   two: {r: 255, g: 255, b: 255},
//   three: {r: 255, g: 255, b: 255},
//   four: {r: 255, g: 255, b: 255},
// }, output: [5]}
// ]

// training data formate
// {
//   input: [
//    0,0,0,
//    0,0,0,
//    0,0,0.
//    0,0,0,
//    0,0,0
//   ],
//   output: [score]
// }

class learningCore {

  constructor() {
    this.network = new brain.NeuralNetwork();

    this.testData = [];

  }

  setTestData(seedArr){

    seedArr.forEach((seedData) => {
      const { input, output } = seedData;
      const tempInput = (this.rgbToArray(this.rgbConverter(input)))

      this.testData.push({input: tempInput, output: [(output[0] - 1) / 4]})
    })

  }


  randomRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return { r, g, b };
  }

  randomColor(inputOne, inputTwo, inputThree, inputFour){
    let one = inputOne || this.randomRGB();
    let two = inputTwo || this.randomRGB();
    let three = inputThree || this.randomRGB();
    let four = inputFour || this.randomRGB();

    return {one, two, three, four};
  }

  rgbConverter(inputData){
    const { one, two, three, four } = inputData;
    return ({one: {
    r: Math.round(parseInt(one.r) / 2.55) / 100,
    g: Math.round(parseInt(one.g) / 2.55) / 100,
    b: Math.round(parseInt(one.b) / 2.55) / 100 },
    two: {
    r: Math.round(parseInt(two.r) / 2.55) / 100,
    g: Math.round(parseInt(two.g) / 2.55) / 100,
    b: Math.round(parseInt(two.b) / 2.55) / 100 },
    three: {
    r: Math.round(parseInt(three.r) / 2.55) / 100,
    g: Math.round(parseInt(three.g) / 2.55) / 100,
    b: Math.round(parseInt(three.b) / 2.55) / 100 },
    four: {
    r: Math.round(parseInt(four.r) / 2.55) / 100,
    g: Math.round(parseInt(four.g) / 2.55) / 100,
    b: Math.round(parseInt(four.b) / 2.55) / 100 },
    }
    )
  }

  rgbToArray(inputData){
    const { one, two, three, four} = inputData;
    return([
      one.r, one.g, one.b,
      two.r, two.g, two.b,
      three.r, three.g, three.b,
      four.r, four.g, four.b,
    ])
  }

  insertTestData(currentColors, score){

     const tempData =  {
        input: this.rgbToArray(this.rgbConverter(currentColors)),
        output: [((score - 1) / 4)]
      }

      this.testData.push(tempData);

      if (this.testData.length > 100){
        this.testData.shift()
      }

  }

  brain(inputOne, inputTwo, inputThree, inputFour){
    //train network

    // this.network.train(this.testData, {log: true});
    this.network.train(this.testData);

    let newColors = [];
    let result = [];

    //generate array of new colors [{input:[], output:[score]}]

    for (let i = 0; i < 10; i++){

    let input = this.randomColor(inputOne, inputTwo, inputThree, inputFour);
    let score = this.network.run(this.rgbToArray(this.rgbConverter(input)));
    newColors.push({input, score})

    }

    let sortedColors = newColors.sort((a, b) => {
      var a = (a.score)
      var b = (b.score)

      return b - a;
    })

    for (let i = 0; i < 10; i++){
      result.push(sortedColors[i].input)
    }

    return (result)
  }

  // trainBrain(inputData) {
  //   if (this.data.length < 3){
  //     return {color: this.randomText(), chance: 0};
  //   }
  //   else {
  //   let rgb = this.rgbConverter(inputData);

  //   // this.network.train(this.data, {log: true});
  //   this.network.train(this.testData);
  //   const result = this.network.run(rgb);

  //   console.log('my result is: ', result);

  //   if (result.light > result.dark){
  //     let chance = (Math.round(result.light * 100) );
  //     return {color: 'white', chance};
  //   }
  //   else {
  //     let chance = (Math.round(result.dark * 100) );
  //     return {color: 'black', chance};
  //   }

  //   }

  // }

}

module.exports = learningCore;
