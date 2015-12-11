app.factory('emails', ['$http', function($http) {
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/emails-api/emails.json')
        .success(function(data) {
           return data;
         })
        .error(function(err) { 
           return err; 
         }); 
}]);


app.factory('forecast', ['$http', function($http) { 
  return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
