app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider
       .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/homeView.html',
            controller  : 'homeController'
        })
});