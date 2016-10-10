# FeedReader Jasmine testing
The goal of this project was to develop [Jasmine](http://jasmine.github.io) functionality tests for
a given [Feedreader web application](https://github.com/udacity/frontend-nanodegree-feedreader). 


## Functionality tests
I modified `jasmine/spec/feeedreader.js` in order to test the following: 

- RSS Feeds are defined, have URLs that are defined and not empty, and have names that are 
defined and not empty.

- The menu is hidden by default and changes visibility when the its icon is clicked.

- Initial Entries have at least one '.entry' element within the '.feed' container.

- New Feed Selection has a new feed with changing content

For easy comparison, I have included the original version of the `feeedreader.js` file, which is named `jasmine/spec/feeedreader-original.js`

A successful test will display: 

![Alt text](/img/goodtest.png?raw=true "Optional Title")

## Run the application 
You can access the finished application [here](https://miguelamartinez.github.io/feedreader-testing/). 








