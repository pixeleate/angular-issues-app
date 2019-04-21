const detailsController = function(issueDetailService ,$routeParams){

    let self = this;
        self.issue = {};
    
    const getIssue = (id) => {
        issueDetailService.getIssue(id)
            .then((issue) => {
                self.issue = issue.data;
            },(data) => {
                console.log(data);
            })
    }

    getIssue($routeParams.issueId);
    
}

export default detailsController