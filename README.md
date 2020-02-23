## Project: Team Profile Generator
## Author: Pranitha Maganty
### Description: Application that allows Manager to render and HTML page of everyone on their engineering team.
### Github Repo Link: https://github.com/pmaganty/team_profile_generator

#### Directions to use App:
+ Download dependencies: Use the "npm i" command in the terminal to download all required dependency libraries
+ Run Application: Enter "node ./create_employee_page" in the terminal to start the application
+ Answer the questions: User is prompted with questions about employees on the team
    - There can only be a single manager.
    - Any number of Engineers or Interns can be added.
    - All questions must be provided with an answer.
+ Rendered HTML page can be found in the output folder

#### File Contents:
+ create_employee_page.js
    - Main application that collects input form user and renders an output html page
+ package.json
    - contains all dependency information for the application so "npm i" can be used to create a node_modules folder
+ lib/ : Folder containing various logic needed for application to run, including class definitions
    - Employee.js: Employee class
    - Engineer.js: Engineer class (extends Employee)
    - Intern.js: Intern class (extends Employee)
    - Manager.js: Manager class (extends Employee)
    - htmlRenderer.js: contains logic to render final html page
+ html_templates/ : Folder containing all html templates to use for final output rendering
    - engineer.html: contains html template for an engineer card
    - intern.html: contains html template for an intern card
    - manager.html: contains html template for a manager card
    - index.html: contains main html template that all others will be inserted to for final output
+ output/ : Folder containing output of application
    - output.html: contains final rendered html with all team info once application has been run completely
    - style.css: contains styling for output.html
+ test/ : Folder containing unit tests for the application
    - Employee.test.js: contains unit tests for Employee class
    - Engineer.test.js: contains unit tests for Engineer class
    - Intern.test.js: contains unit tests for Intern class
    - Manager.test.js: contains unit tests for Manager class
