app.controller('DetailController', ['$stateParams', 'GameService',
    function($stateParams, GameService) {

        var self = this;

        self.comment = '';

        // we use $stateParams to access any variables that were passed in the ui-router URL
        self.game = GameService.getGame($stateParams.id);

        self.addComment = function() {
            self.game.comment = self.comment;
            GameService.updateGame($stateParams.id, self.game);
        };

    }
]);