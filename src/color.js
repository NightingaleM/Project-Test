const colorMap = {
    "LightGray": "\x1b[90m",
    "Red": "\x1b[31m",
    "Green": "\x1b[32m",
    "Yellow": "\x1b[33m",
    "Blue": "\x1b[34m",
    "Magenta": "\x1b[35m",
    "Cyan": "\x1b[36m",
    "White": "\x1b[37m"
};

let colors =(function(){
  let result = [];
  Object.keys(colorMap).forEach((key) => {
    result.push(colorMap[key]);
  });
  return result
}());

function pikRandomColor(){
  let index = parseInt(Math.random() * colors.length,10);
  return colors[index];

}


module.exports = {
  colorLog: function(...args){
    let color = pikRandomColor();
    console.log(color,...args);
  }
}