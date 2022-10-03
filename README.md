# My notes:
## Week 5, ex 1: Simple Node server
1. create project: *nxp create-react-app namename*
2. Create folder with name server
3. Cd to server-folder in terminal:
- Initialise new Node project: *npm init -y*
- -> this creates package.json -file, which has basic info for Node project.
5. Install Express library, which is a node framework: *npm install express*
6. To avoid restarting server between every update, install Nodemon as a development dependancy:  *npm install --save-dev nodemon*
- add configuration to pacjakge.json-file (i.o.w., commands to start the server etc): scripts: *"devstart": "nodemon index.js"*
7. Create *index.js* -file under *server*-folder
8. On index.js, define routes and create app by using express framework.
9. Test server: *npm run devStart*

## ex.2: Calling Node from React

10. Install axios-library: *npm install axios*
11. Open App.js and implement useEffect, where Axios is used to call Node service and print out message. For testing purpose, print also on console.
- State variable: display data
- axios get: retrieve data
- response.data: return data
- json: message is here
12. Test the app: open multiple terminals
- In project directory run the App.js: *npm start*
- In server-directory run/test the server: *npm run devStart*

13. Error-message about undefined message 
14.  Error-message about missing CORS:
- To allow cross-origin calls, install cors library:
- - In server-deirecotry: npm install cors 
- - in index.js: *aquire* and *use* cors (check file for example)

- NOW: localhost:3000 is showing the message as in App.js
- AND: localhost:3001 is showing the json array, as per index.js
