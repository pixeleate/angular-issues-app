import * as angular from 'angular';
import issuesService from './services/issues.service';
import detailService from './services/detail.service';
import issuesController from './controllers/issues.controller';
import detailsController from './controllers/details.controller';


angular.module('issuesList',[require('angular-route')])
        .service('issuesListService', issuesService)
        .service('issueDetailService', detailService)
        .controller('issuesListController', [ 'issuesListService', issuesController])
        .controller('detailsController', [ 'issueDetailService', '$routeParams', detailsController])
        .config(function($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    controller: 'issuesListController',
                    controllerAs: 'issuesCtrl',
                    templateUrl: "./views/list.html"
                })
                .when('/details/:issueId', {
                    controller: 'detailsController',
                    controllerAs: 'detailCtrl',
                    templateUrl: "./views/details.html"
                });
        });