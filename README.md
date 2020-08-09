This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) And [AWS Amplify](https://docs.amplify.aws/).

## Getting started

Before running `npm start` you will need to configure Amplify. Once Amplify is all set up you should be able to run the project locally with the `npm start` script.

You can see the published site at http://fivetalenttest-20200809111603-hostingbucket-dev.s3-website-us-west-2.amazonaws.com/

## Known Issues

-   General error handling
-   Modals don't always close properly
-   Form validation is not enforced which causes dynamo errors when adding/editing items
-   Only shows the first photo in the gallery
-   Photos need to be reuploaded when editing a listing, otherwise they disappear
-   General styling

## Priority if I had more time

-   TDD, didn't seem feasible to reach an MVP in the allotted time with TDD approach.
-   Add error handling
-   Write tests
-   Fix bug where photos need to be reuploaded
-   Add photo gallery so all images can be swiped/scrolled through
-   Add form validation
-   Style appropriately, with mobile first.

## Total Dev time breakdown

-   2hrs research (30 mins amplify, 45 mins VTL for atomic counter, 45 mins search with graphql filters)
-   6hrs dev time (30 mins styling, rest was to hit an MVP)

## What I liked

-   Reaching an MVP within the time limit
-   Learning/implementing search with graphql filters
-   Learning amplify
-   Creating an atomic counter in Dynamo for unique mls numbers

## What was the most difficult

-   Understanding VTL well enough to create a request mapping template for the atomic counter

## How did I test

Because of the time contraints I painfully opted out of TDD for this project. Instead I relied on my own ad-hoc testing and included my wife in a QA session before publishing
