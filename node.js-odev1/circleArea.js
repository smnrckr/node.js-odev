let arguments = process.argv.slice(2);

function circleArea(r){
    let area = Math.PI*r*r ;
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${area}`);
}

circleArea(arguments);
