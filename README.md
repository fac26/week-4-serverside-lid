## Week 4 - Server Side App

Contributors: Dominic, Iman and Laura

###### A place to post about your favourite films :)

###### Our app allows the user to create an account and log-in subsequently. The app's purpose is to allow the user to upload stills from their favourite movie. 


## Setup

Make sure you have Git and Node (v18) installed.

Clone this repo and cd into the directory

Run ```npm install``` to install all the dependencies

Run ```npm run seed (npm run seedWindow for Windows)``` to seed the local database. 

Run ```npm run dev (npm run devWindow for Windows)``` to start the server.

This uses the nodemon library to auto-restart the server when you save changes.

### Criteria

- [ ] Express server
- [ ] Well-organised modular codebase
- [ ] SQLite database
- [ ] Hosted on Fly.io
- [ ] One of the spike topics
- [ ] Validate user-submitted data on the server
- [ ] Handle errors and inform the user
- [ ] Styled appropriately

### Schema

Films DB:

| id | name                                         | year          | director        | genre_id  |
|:--:|:----------------------------------------:    |:-------------:|:---------------:|:---------:|                                                                     
| 1  | Star Wars                                    | 1977          | George Lucas    | 1         |
| 2  | Jaws                                         | 1973          | Steven Spielberg| 2         |
| 3  | Schindler's List                             | 1993          | Steven Spielberg| 3         |                             
| 4  | The Lord of the Rings: The Return of the King| 2003          | Peter Jackson   | 4         |                   
| 5  | JFK                                          | 1991          | Oliver Stone    | 5         |

- Genres DB

| id | name                                         | 
|:--:|:----------------------------------------:    |                                                                    
| 1  | Science Fiction                              |
| 2  | Horror                                       |
| 3  | Drama                                        |
| 4  | Fantasy                                      |
| 5  | Politics                                     |


- Photos DB

- Users DB
