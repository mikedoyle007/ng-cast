angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      video: '<',
      onClick: '<',
      selectVideo: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
