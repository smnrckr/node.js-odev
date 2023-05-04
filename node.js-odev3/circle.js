function circleArea (r){
    let area=(Math.PI*r*r);
    console.log(`Yarıçapı ${r} olan dairenin alanı ${area}'dır.`);
}


function circleCircumference(r){
    let circumference=(2*Math.PI*r);
    console.log(`Yarıçapı ${r} olan dairenin çevresi ${circumference}'dır.`);

}

module.exports = {
    circleArea, 
    circleCircumference
}

