# Angular JS learning from Codecademy

Link to the website:
http://www.codecademy.com/en/learn/learn-angularjs

Just run index.html

# Example1
Setup an AngularJS app from scratch

* Create an app (angular.module)
* Create a controller (app.controller)
* Use the app and controller in a view (ng-app)
* Add model and display data in view (ng-controller, ng-repeat, $scope, $scope.model {{model}})
* Add behaviour to the view (ng-click)

# Example2
Directives

* Create directive (app.directive)
* Add directive to view (new HTML element) - reusability
* Add behaviour to directive by linking

TODO: Read more about directives. What is link? *sarcastic*

# Example3
Services

* Create service (app.factory)
* Use HTTP Get to get Ajax data ($http.get)
* Use the service in Controller to get data - key part
* Display data in view

Note:
* A static JSON file is available in S3 http://s3.amazonaws.com/codecademy-content/courses/ltp4/forecast-api/forecast.json
* Copy of file is in data/forecast.js

#Example4
Routing

* Add new route (ngRoute as dependency to the application)
* Route can now be configured using app.config
* angular-route.js should be additionally downloaded
* Add new router and route it to a new Controller/View (/cities)
* Visit new view using http://localhost:63342/AngularJS-Learning/src/example4/#/cities
* (To access city array, make it a service)
* Add new route city/:id and associate it with a new controller
* Add navigation to go to Home and Cities list
