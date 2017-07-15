angular.module('video-player')
  .controller('appCtrl', function($scope) {
    $scope.$ctrl.videos = exampleVideoData;
  })
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'appCtrl'
  });
