
myTicTacToe.factory('Data', function() {
  var data = {
     player1Name: '',
     player2Name: ''
  };

  return {
     getPlayer1Name: function () {
       return data.player1Name;
     },
     getPlayer2Name: function () {
       return data.player2Name;
     },
     setPlayer1Name: function (name) {
       data.player1Name = name;
     },
     setPlayer2Name: function (name) {
       data.player2Name = name;
     }
  }
});


