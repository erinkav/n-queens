/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n) {
  var newboard = new Board({n: n});
  //start at 0,0 coordinates
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      newboard.togglePiece(i, j);
      if (newboard.hasRowConflictAt(i) || newboard.hasColConflictAt(j)) {
        newboard.togglePiece(i, j);
      }
    }
  }
     // put a rook in that sqaure
    //check for row conflict && column conflict
    //if yes remove rook
    //if no keep it 
    //move onto next squre

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(newboard.rows()));
  return newboard.rows();
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;
  var newboard = new Board({n: n});
 
  var innerFunction = function(board, innerCount) {
    if (board.hasAnyColConflicts || board.hasAnyRowConflicts) {
      if (innerCount === n) {
        solutionCount++;
      }
      for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
          if (board.rows()[i][j] === 0) {
            var boardCopy = board.slice();
            boardCopy.togglePiece(i, j);
            console.log(boardCopy);
            innerFunction(boardCopy, innerCount + 1);
            // board.togglePiece(i, j);
          }
        }
      }
    }
  };
  
  innerFunction(newboard.rows(), 0);
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
