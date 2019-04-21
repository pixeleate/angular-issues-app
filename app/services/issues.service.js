const issuesService = function ($http, $q){

    const getIssues = (page) => {
        let def = $q.defer();

        $http.get(`https://api.github.com/repos/nodejs/node/issues?per_page=25&page=${ page ? page : ''}&state=all`).then(
            function(data) {
                service.linkHeader = data.headers('Link');
                def.resolve(data);
            },
            function() {
                def.reject("Failed to get issues data");
            }
        )
        return def.promise;
    }

    let service = {
        linkHeader: '',
        getIssues
    }

    return service;
}

export default issuesService;