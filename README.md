### How to start the app

- `npm install`
- `npm run bundle`
- `npm start`

A live version of the app is running on Zeit Now: https://angular-issues-app.pixeleate.now.sh


### Explanation 

The app was created using the version 1.x.x of AngularJS, the reason to use that version was that I was familiar with it, the app is using webpack to have a modularised app and to leverage the webpack features.

I have a main `html` file with the `ng-view` directive and 2 additional `html` files with the 2 different views (list and detail).

I have several `js` files (services, controller, app), I basically created 2 services with the `http` calls one for getting the full list of issues and a second one to get the details of the selected issue, I'm reusing the first service to make the pagination calls (explained later).

I have 2 controllers one for each view.


### Github pagination explained

To achieve the pagination behavior I did read the API documentation, since I couldn't find any reference to pagination / pages in the response of the API calls, the reason was because the pagination data / info returns in the headers, so I get the number of pages, next page and previous page by parsing the `Link` key coming in the headers, that way I could make the calls to the expected page, the number of elements is specified in the endpoint as a query parameter.

### CSS

Everything was made from scratch, no libraries no 3rd party tools, only google fonts.

### Backend

A very basic server to serve the files (Node.js)
