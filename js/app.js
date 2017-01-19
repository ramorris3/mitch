// Angular app definition, include ui-router state definition
var app = angular.module('GamesApp', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/list');

        // Here's where we define each of our URL states.
        // Right now we just have one for a list of games,
        // and one for a detail view of a game.
        $stateProvider
            .state('list', { // this route is for looking at the entire list of games
                url: '/list',
                templateUrl: 'templates/list.html',
                controller: 'ListController',
                controllerAs: 'ListCtrl'
            })
            .state('detail', { // this route is for looking at a single game
                url: '/detail/:id', // here we're passing the ID of the game we want to look at
                templateUrl: 'templates/detail.html',
                controller: 'DetailController',
                controllerAs: 'DetailCtrl'
            });

    });