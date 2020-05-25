# ✍️ Schrijvers ✍️

## What this app is about

This app is intended to serve as a platform for my (Dutch) writing peers to share short stories on and hone our craft together, fertile ground for the aspiring artist. 🌹
 
## Table of contents 

 • [App demo](#App-demo)\
 ∙ [Technologies used](#Technologies-used)  
 • [Goals for this project](#Goals-for-this-project)  
 ∙ [User stories and Wireframe](#User-stories-and-Wireframe)  
 • [Git workflow](#Git-workflow)  
 ∙ [Server-repo](#Server-repo)  

## App demo

[Click here to see the app deployed](https://priceless-bardeen-be2589.netlify.app/)

### Some features highlighted: 

![allStories](/src/images/Allstories.png)
List of all stories. Able to filter depending on user conditions. 

![readStory](/src/images/readStory.png)
Read a story, via infinite scroll pagination. 

![Heatmap](/src/images/Heatmap.png)
Heatmap. Shows how much of writer's story was actually read by users.

![Rating](/src/images/rating.png)
User is able to give a star rating if logged in. 

## Technologies used

👀👇 Click links to view some samples in this project 👇👀
 * [HTML](https://github.com/JasonNelemans/schrijvers-client/blob/master/public/index.html)
 * [CSS](https://github.com/JasonNelemans/schrijvers-client/blob/master/src/pages/LandingPage/landingpage.css)
 * [Javascript](https://github.com/JasonNelemans/schrijvers-client/blob/master/src/pages/StoryList/index.js)
 * [React](https://github.com/JasonNelemans/schrijvers-client/blob/master/src/App.js)  
 * [Redux](https://github.com/JasonNelemans/schrijvers-client/tree/master/src/store/readStory)  
 * [Express](https://github.com/JasonNelemans/schrijvers-server/blob/master/index.js)  
    * [REST API](https://github.com/JasonNelemans/schrijvers-server/blob/master/routers/stories.js)  
 * [Sequelize](https://github.com/JasonNelemans/schrijvers-server/blob/master/migrations/20200415150621-create-paragraph.js)  
 * [Moment.js](https://github.com/JasonNelemans/schrijvers-client/blob/master/src/pages/StoryList/Story.js)  
 * More technologies in waiting...

## Goals for this project

The goal of this project was to build and expand upon the technologies I've learned during my bootcamp, by combining the things I am interested in: web development and writing.  
The app is still a work in progress, but the horizons are clear and so is the way forward.   
 
 * practice full-stack development.  
 * Apply what I have learned and then some.  
 * Showcase approach of development by using wireframes and user stories.  
 * Practice disciplined [git usage](#Git-workflow).  
 * Open up the platform to my friends.

## User stories and Wireframe

**For a detailed overview of all past, current and future stories, please check out [here](https://trello.com/b/Z9tchgrn/short-story-platform)** 

*This mvp is still a work in progress. Some features still need to be implemented and revised. If you have any suggestions, please let me know [here](https://www.linkedin.com/in/jasonnelemans/)*

### Wireframe

[Click here for the wireframes of this project](https://jasonnelemans.proto.io/player/index.cfm?id=51106bc6-06e0-422e-94b6-b45bf61b2cb9)

## Git workflow

In this project I aimed at using:

 * Good commit messages
 * Well named branches
 * Pull requests with summaries

#### 👀👇 Click links to view samples of pull requests 👇👀
 * [Read Story](https://github.com/JasonNelemans/schrijvers-client/pull/2)(client)
 * [Read Story](https://github.com/JasonNelemans/schrijvers-server/pull/2)(server)

## Server-repo

The server side of this project is an Express server connected to a Sequelize database. [Click here for more details](https://github.com/JasonNelemans/schrijvers-server)
 




 
