'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('lodgiApp',
  [ 'lodgiApp.config'
  , 'lodgiApp.controllers.header'
  , 'lodgiApp.controllers.signin'
  , 'lodgiApp.controllers.signup'
  , 'lodgiApp.controllers.nfl'
  , 'firebase', 'ui.bootstrap', 'ngRoute']
  )
