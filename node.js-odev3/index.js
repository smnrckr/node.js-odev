let argument = process.argv.slice(2);

const{ circleArea, circleCircumference } = require('./circle');

circleArea(argument);
circleCircumference(argument);