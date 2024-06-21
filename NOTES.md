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



