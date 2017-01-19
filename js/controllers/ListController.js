app.controller('ListController', ['GameService',
    function(GameService) {

        var self = this;

        self.games = GameService.games;

        // adds a game to the list
        self.addGame = function(title, developer, genre) {
            // Here you would probably call a GameService.add function
            // that would make an http request to the backend.  Since
            // our data is hardcoded, we'll just add a game object
            // to the games list instead of posting to the server.
            self.games.push({
                title: title,
                developer: developer,
                genre:genre
            });
        };
    }
]);