// We're going to "inject" this service into our controllers whenever
// they need access to the list of games.
app.service('GameService', function(){

    var self = this;

    // Normally we would just load all this data from the backend,
    // but since it's hardcoded we'll just store it here in a variable.
    self.games = [
        {
            title: "Spelunky",
            developer: "Derek Yu",
            genre: "2D, Action, Platformer, Roguelike"
        },
        {
            title: "Super Meat Boy",
            developer: "Team Meat",
            genre: "2D, Platformer"
        },
        {
            title: "Hyper Light Drifter",
            developer: "Heart Machine",
            genre: "2D, Action, Adventure, RPG"
        }
    ];

    self.getGame = function(index) {
        return self.games[index];
    };

});