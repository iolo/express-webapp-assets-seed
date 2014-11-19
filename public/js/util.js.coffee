# global angular
# js/util.coffee.js
app = angular.module 'app'
app.filter 'capitalize', () ->
  (str) -> str.charAt(0).toUpperCase() + str[1..]
