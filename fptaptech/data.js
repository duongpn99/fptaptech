(
    function(){
        angular.module('youtubeApp',[]);
    }
)();
(function(){

    angular
        .module('youtubeApp')
        .controller('mainController', mainController);

    function mainController(youtubeService){

        var vm = this;
        vm.videoListing = [];
        vm.message = 'Youtube Data API with AngularJs';

        function showVideos(){
            youtubeService.getVideos().success(function(data){
                vm.videoListing = data.items;
            });
        }
        showVideos();
    }
})();

(function(){
    angular
        .module('youtubeApp')
        .factory('youtubeService', youtubeService);

    function youtubeService($http){

        var apiKey = "AIzaSyCCyUIh8hF92X-Wx_VnJXmOnPJqdBCGdII",
        apiURL = "https://www.googleapis.com/youtube/v3/search?videoEmbeddable=true"
        +"&order=date&part=snippet&channelId=UCWu91J5KWEj1bQhCBuGeJxw&type=video&maxResults=15&key=" 
        + apiKey,
        youtubeFactory = {};

    youtubeFactory.getVideos = function(){
        return $http.get(apiURL);
    };
    return youtubeFactory;
    }
})();