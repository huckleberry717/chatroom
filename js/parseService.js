var app = angular.module('chatroom');

app.service('parseService', function($http){

    this.getData = function(){
        return $http.get('http://localhost:3000/get')
    };

this.postData = function(message){
        return $http.post('http://localhost:3000/post', {text: message})
    };

});
