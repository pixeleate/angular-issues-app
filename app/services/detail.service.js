const detailService = function($http, $q){
    const getIssue = (issueId) => {
        let def = $q.defer();

        $http.get(`https://api.github.com/repos/nodejs/node/issues/${ issueId }`).then(
            function(data) {
                service.issue = data.data;
                def.resolve(data);
            },
            function() {
                def.reject("Failed to get issues data");
            }
        )
        return def.promise;
    }

    let service = {
        issue: {},
        getIssue
    }

    return service;
}

export default detailService;