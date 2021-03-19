 # Vue.js Frontend

> Full Stack Dev Assessment

## Build Setup

``` bash
# install dependencies
npm install

# serve at localhost:5000
serve
```
## Tasks

- [x] Setup a backend api that has a rest endpoint that returns a random number in json. 
    Deploy backend server so that frontend can make request to it locally. If needed add CORs exception for frontend if the frontend is not local to the backend environment. This is usually only a problem when using containers for the environment.
    Example JSON return is ``` {'results': 12} ```
    
    **see the [PHP API](https://github.com/hugentoblerd/clevercoding-test2-api)*

- [x] Setup a frontend web app that has a button that when pushed makes a rest api call to get a random number(between 1 and 100) and then parses the json and displays the number.  
    The random number should show without refreshing the page. Pushing the button again will make a new rest call and display the new number.

- [x] For bonus points. On the frontend add each random number to an array and display it in a responsive grid and make each grid item a separate component which you pass the random number as a prop and then communicate back with the parent component to reactively update the number which the grid item is clicked.  Placing a border around the selected grid item.