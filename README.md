# [Petsagram](https://petstagram-fac.herokuapp.com/)

A place to post about your pet :)
![Petsagram](https://user-images.githubusercontent.com/61504375/195832512-a8ad437c-07c0-4eda-a729-f468c850e737.png)

## Roles

- Joe: Scrum Facilitator
- Alex: QA
- Lisa: Dev-ops
- Abdullah: UX/UI

## Setup

Make sure you have Git and Node (v18) installed.

Clone this repo and cd into the directory

Run ```npm install``` to install all the dependencies

Run ```npm run seed (npm run seedWindow for Windows)``` to seed the local database. 

Run ```npm run dev (npm run devWindow for Windows)``` to start the server.

This uses the nodemon library to auto-restart the server when you save changes.

## Database

This project uses Sqlite3 through the use of the common library `better-sqlite3`.
Our database uses three tables following this schema: 


### users

| column      | type    | constraints               |
| ----------- | ------- | ------------------------- |
| id          | integer | primary key autoincrement |
| name        | text    |                           |
| email       | text    | unique                    |
| hash        | text    |                           |
| created_at  | datetime| current timestamp         |



### pets

| column      | type    | constraints                      |
| ----------- | ------- | -------------------------        |
| id          | integer | primary key autoincrement        |
| pet_name    | text    |                                  |
| user_id     | integer | references users(id)             |
| pet_type    | text    |                                  |
| image_path  | TEXT    |                                  |
| private     | integer | default 0 check(sharing in 0, 1) |



### sessions

| column      | type    | constraints                   |
| ----------- | ------- | -------------------------     |
| id          | text    | primary key                   |
| user_id     | text    | references users(id)          |
| expires_at  | datetime| not null                      |
| created_at  | datetime| default current timestamp     |



## User Stories
- [x] As a user I want to post about my cute pet.
- [x] As a user I want to comeback to your site and see what I posted is still there.
- [x] As a user I want to Sign up.
- [x] As a user I want to log in and log out.
- [x] As a user I want to be able to add my posts either to my page or to the public page 

## Acceptance Criteria
- [x] Express server
- [x] Well-organised modular codebase
- [x] SQLite database
- [x] Hosted on Heroku
- [x] One of the spike topics
- [x] Validate user-submitted data on the server
- [x] Handle errors and inform the user
- [x] Styled appropriately


## Communication
Throughout our project we used pair-programming method to write the code and rosolve issues. We met in-person, as well as had online meetings to discuss and work together. We would gather for 5-10 minutes for a quick huddle to discuss the progress so far, and if we faced any issues.

## Tools Used
Discord
VS Code Live Share extension
Github Project Board
Software Methodologies
During our planning stage, we identified there were functions and components that would be reused in the project. As a result, we decided to include modularization and attempted to follow the DRY principle.
