app.controller('ListController', ['GameService',
    function(GameService) {

        var self = this;

        self.games = GameService.games;

        // used to add new games
        self.newGame = {
            title: '',
            developer: '',
            genre: ''
        };

        // adds a game to the list of games
        self.addGame = function() {
            // The GameService has an interface for adding games
            // to our data model's games list, so we're going to
            // call that function here.  See GameService.js to see
            // the implementation of that function
            GameService.addGame(self.newGame);
        };
    }
]);