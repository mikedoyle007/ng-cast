angular.module('video-player')
  .controller('AppCtrl', function($scope) {
    $scope.$ctrl.currentVideo = exampleVideoData[0];
    $scope.$ctrl.videos = exampleVideoData;

    $scope.$ctrl.selectVideo = function(video) {
      $scope.$ctrl.currentVideo = video;
    };
    $scope.$ctrl.searchResults = function() {};
    $scope.$ctrl.onClick = function(video) {
      return $scope.$ctrl.selectVideo(video);
    };
    $scope.$ctrl.result = function() {};
  })
  .component('app', {
    templateUrl: 'src/templates/app.html',
    controller: 'AppCtrl'
  });
