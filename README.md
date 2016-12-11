# NgChatv2

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.19-3.
1. ng new PROJECT_NAME
2. For server: 
    a. create package.json with 2 dependencies: express & socket.io.
    b. create server.js file. this file use express and socket.io to listen all request from clients then response messages to all clients accordingly
3. For browser loading:
    a. create file socket.io.js from cdn.socket.io. Locate it in dedicated folder /src/vendor/socket.io-client/socket.io.js
    b. insert that socket.io.js into index.html
4. For clients:
    - When access to localhost:4200, chat.component.ts getMessages() and always subscribe any update ( message sent out from server)
    - user send message to server {message, username} with event name 'add-message'
    - server listen to event 'add-message' and then emit an event name 'message' with an object{ eventName: message, text: message, username: username}
    - when server emit a new event, all clients observer and update to messages[] then display in DOM
5. Remember to add some declaration into typings.d.ts or run command "npm i @types/socket.io-client"




HOW TO RUN:
- clone this project
- install package
- go to location /src/serve/ and run "node server.js"
- open new terminal, type "ng serve"




CLIENT-1                               SERVER                               CLIENT-2
    |       "Hi there"                    |                                       |
    |  -------------------------------->  |                                       |
    |              "Hi there"             |         "Hi there"                    |
    |  <--------------------------------- |  ------------------------------>      |
    |                                     |                "Yes sir"              |
    |                                     |   <---------------------------------  |
    |                "Yes sir"            |              "Yes sir"                |
    |  <--------------------------------- |   --------------------------------->  |
    |                                     |                                       |
    |                                     |                                       |
    |                                     |                                       |
    |                                     |                                       |
    |                                     |                                       |
    |                                     |                                       |
    |                                     |                                       |
    |                                     |                                       


