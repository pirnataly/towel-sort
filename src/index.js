
// You should implement your task here.

 module.exports = function towelSort (matrix=[]) {
     let arr = [];
    if (matrix.length===0) {
        return arr;
      }
    else {

     for (let i = 0; i < matrix.length; i++) {
         for (let j = 0; j < matrix[i].length; j++) {
             let columnIndex = (i % 2 === 0) ? j : matrix[i].length - j - 1;
             arr.push(matrix[i][columnIndex]);
         }
     }

     return arr;
 }}


