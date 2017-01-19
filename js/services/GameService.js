// We're going to "inject" this service into our controllers whenever
// they need access to the list of games.
app.service('GameService', function(){

    var self = this;

    // Normally we would just load all this data from the backend,
    // but since it's hardcoded we'll just store it here in a variable.
    self.games = [
        {
            id: 0,
            title: "Spelunky",
            img: "img/spelunky.jpg",
            developer: "Derek Yu",
            genre: "2D, Action, Platformer, Roguelike",
            description: ""
        },
        {
            id: 1,
            title: "Super Meat Boy",
            img: "img/meatboy.jpg",
            developer: "Team Meat",
            genre: "2D, Platformer",
            description: ""
        },
        {
            id: 2,
            title: "Hyper Light Drifter",
            img: "img/hyperlightdrifter.jpg",
            developer: "Heart Machine",
            genre: "2D, Action, Adventure, RPG",
            description: ""
        }
    ];

    // used to retrieve a single game
    self.getGame = function(index) {
        return self.games[index];
    };

    // Used to add a game to the list.
    // If we had a backend, this function would make an HTTP PUT request
    // and add this game to the data model on the backend.  Since we're
    // not doing this, any games we add will be removed from the list
    // any time we refresh the page or switch states within the site.
    self.addGame = function(newGame) {
        // add an ID to the game
        newGame.id = self.games.length;
        // add the game to the list of games
        self.games.push(newGame);
    };

    // Used to update a game in the list (for adding comments)
    self.updateGame = function(id, newGame) {
        var game = self.getGame(id);
        game = newGame;
    }

});