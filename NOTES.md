NOTE  - package.json is the most important file.
      - it contains all the details about project.
      - always read this file to get the information about the project.

****** COMMANDS ******* 
// see script in package.json file
 
 // to create a project
 -- npx create-react-app folderName

 // to start a project
 -- npm run start

 // to build a project
 // this cmd will create a build folder inside your project
 // this folder will contain all the HTML,CSS,JS code converted from react 
 -- npm run build


 NOTE**  -> create-react-app is not a good way to create react projects .
 - since it is more bulky and brings a lot of useless things with it.

 **NOTE - use vite to create your projects.

 // to create a project using vite
 -- npm create vite@latest

 - see package.json file here
 - see dependencies key in json file
 - in vite you will get only react and react-dom dependencies , whereas in create-react-app you were getting a lot of testing libraries,etc as well , which were of no use for us.
 - using vite to create projects is much useful.

 NOTE - here you will get more devDependencies
      - devDependencies are only for our use , they do not get pushed into production.
      - they are just for our work purpose.

- use npm i or npm install to install node_modules folder inside your project.


- cd .. -> cmd to go one folder back



01basicreact

    -- we created this project using create-react-app.
    -- command - npx create-react-app folderName.

    -- node_module folder
        -- contains all the dependencies required to run react project.

    -- saara kaam ya to src folder ke andar ho rha h , ya to public folder ke andar ho rha hai.

    -- spa - single page application.
    -- react is used to create spa.

    -- The <noscript> tag in HTML is used to display the text for those browsers which does not support script tag or the browsers disable the script by the user. This tag is used in both <head> and <body> tag.

    -- reactDOM is the implementation of react on web.

    -- react can create its own DOM i.e, virtual DOM.

    -- <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
      -->

    -- <App />
        -- it is nothing but a function which returns HTML.

    Q) how does javascript code gets injected in the HTML file , even if we have not linked any js file using script tag in html file?(inspect and see)

    Ans - "react-scripts" present in package.json file are responsible for this operation.

# 1:05:00

 -- it is always necessary to inject javascript into html file , for javascript to make any manipulation into  html page.

 -- package.lock.json is also a json file , but the only difference is that soem stable version of dev dependencies is locked over here.

 *** NOTE ***
 -- always start function name with a capital letter
 -- or else it will give error
 -- inspect and see.

 Best Practice - start both function and file name with a capital letter.

** NAming Convention ** --

In Vite -
    -- use .jsx extension for all file names.

In create-react-app
    -- use .jsx extension for files in which some functions are returning some html code (jsx).

    -- use .js for other js files.


******* LECTURE -4 (custom react) *********

******* LECTURE -5 (hooks) *********

-- React Controls the value updation of an element in UI.
-- React Controls UI Updation.
-- babel automatically injects the react .

-- using a hook , will update the value at all places in the UI.

-- Different Types of hooks

1) useState(default_Value) -  
    
    -- this hook is use to change the state and reflect it in UI.
    
    -- this returns an array containing a counter(we can use any name in place of counter) value(0th index) and a function setCounter(we can use any name for this function).


*************************************


*********** Lecture 6 *********************
(Important for interviews)

1) createRoot method creates a DOM like structure.(Virtual DOM)
    -- it then compares this DOM with main DOM and updates only those things which are updated in UI.

2) Page Reloading - 
    -- In jS complete Dom is removed and a new DOM structure is repainted/recreated every time.
    -- this is called as page reloading.

Whereas In Virtual DOM, we compare the main DOM with our virtual DOM , and will update only those values in the main DOM , which are being changed.
Hence we Do not need to reload again and again.

# react fibre , reconciliation , etc. ->

-- Read this article ->
-- https://github.com/acdlite/react-fiber-architecture



***************************************************

******************* Lecture 7 *********************

Props ->

    -- Props in react makes a component reusable.
    -- we can create a component and can use it anywhere.
    -- In that component , we can write a function returnig some html (eg - code for a card).
    -- every function in the component has access of props (passed as an argument in the function)
    -- while using these components  anywhere , we will pass some values for props in the component , we will then use  this passed values in the function to do some changes.

    -- eg - you want to display different names on every card , so pass a username while using that component and use that username in the function.

*****************************************************

******************* Lecture 8 *************









