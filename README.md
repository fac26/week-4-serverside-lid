## Week 4 - Server Side App

Contributors: Dominic, Iman and Laura

###### Our app allows the user to create an account and log-in subsequently. The app's purpose is to allow the user to upload stills from their favourite movie. 

### Criteria

- [ ] Express server
- [ ] Well-organised modular codebase
- [ ] SQLite database
- [ ] Hosted on Fly.io
- [ ] One of the spike topics
- [ ] Validate user-submitted data on the server
- [ ] Handle errors and inform the user
- [ ] Styled appropriately

### User Stories
As a user, I want to be able to sign up for the application using my GitHub account.
As a user, I want to be able to log into the application using GitHub account.
As a user, I want to be able to submit data to the application, and have it validated on the server-side.
As a user, I want to receive informative error messages if my data submission is invalid.
As a user, I want to have a professional and visually appealing user-interface when using the application.

### Schema

Films DB:

| id | name                                         | year          | director    | genre_id  |
|:--:|:----------------------------------------:    |:-------------:|:-----------:|:---------:|                                                                     
| 1  | Star Wars                                    | 1977          | George Lucas| 1         |
| 2  | Jaws                                         | 1973          |             | 2         |
| 3  | Schindler's List                             | 1993          |             | 3         |                             
| 4  | The Lord of the Rings: The Return of the King| 2003          |             | 4         |                   
| 5  | JFK                                          | 1991          |             | 5         |
  


