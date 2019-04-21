const issuesController = function(issuesListService){

    const getIssues = (page) => {
        issuesListService.getIssues(page)
            .then((issues) => {
                this.issues = issues.data;
            },(data) => {
                console.log(data);
            })
    }

    getIssues();

    const parseLink = (type) => {
        return issuesListService.linkHeader.split(',').filter(item => item.includes(type))[0].split(';')[0].split('=')[2].match(/[0-9]/g).join('')
    }

    const prevPage = () => {
        let page = parseLink('prev');
        getIssues(page);
        this.currentPage = page;
    }


    const nextPage = () => {
        let page = parseLink('next');
        getIssues(page);
        this.currentPage = page;
        this.lastPage = parseLink('last');

    }
    
    angular.extend(this, {
        issues: [],
        getDetails: function(id) {
            console.log(id);
        },
        prevPage,
        nextPage,
        currentPage: '1',
        lastPage: 0
    })
}

export default issuesController;