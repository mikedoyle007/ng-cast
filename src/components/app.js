angular.module('video-player')
  .controller('appCtrl', function($scope) {
    $scope.$ctrl.videos = exampleVideoData;
    $scope.$ctrl.selectVideo = function() {};
  })
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'appCtrl'
  });
