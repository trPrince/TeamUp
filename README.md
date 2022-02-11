
# **Team Up**


**Our Motivation:** 
Throughout our undergrad life we had to create teams for different academic projects, sports, cultural activities, volunteering etc.
While teaming up for academic projects, we had to face the most difficulties as no one surely knew who had already formed the teams and who had not.
And for students who missed that class somehow, they have a hard time because most of the others have already formed a team by then. We wanted to solve this problem
faced by almost every university student.


**Functionalities**:
We have tried to solve this problem by building a web platform for teaming up which has the following functionalities:

1. Any registered user can create Team Up forms by going to the Create New TeamUp page from the dropdown menu in the navbar.
    * A code is generated afterwards.(*Necessary for enrolling for this specific TeamUp*).
1. Users can enable themselves for a Team Up by simply entering the **code** for that.
    * They'll be immediately enlisted in the _Incomplete Teams_ table(other users eligible for that Team Up can see him/her).
1. They can discuss with other users in a common discussion/chat room for that course by clicking the **Discussion** button.
1. They can send other users inside the _Incomplete Teams_ table a **TeamUp request**
    * The request will be added to and displayed inside the _Requests_ table of the receiver.
1. They can recieve **TeamUp requests** from other users inside the _Incomplete Teams_ table.
    * The request will be added to and displayed inside the _Requests_ table of the receiver.
    They can either 
    1. **Accept** the request to Team Up with that user.
        * The users who have completed forming their teams will be displayed in the _Formed Teams_ table.
       or
    1. **Deny** those requests to avoid teaming up with them.
1. They can _go solo_ by clicking the **Confirm Solo** button in the _Requests_ table.
    * The users who have completed forming their teams will be displayed in the _Formed Teams_ table.
1. Once the team has been formed they can also **Split** back, and they'll be
    * removed from the _Formed Teams_ table 
  and 
    * added to the _Incomplete Teams_ table.
1. They can see their **Courses** and **Teams** in the _My Courses & Teams_ page.
1. They can chat with their Team mates about the project ideas or team meeting by clicking on **Chat** in the My Teams table.



# Instructions for running/serving the project
* You'll need to install the following in your device:
1. Python
1. Django
1. mysqlclient
1. xampp

* After successful installation enter xampp and start the following services:
  1. MySQL
  2. Apache 
* Go to the phpmyadmin page using any browser and
  * Create a new table named **web**
* Open the directory where you kept the project.

* Then open terminal and use the following commands in your terminal:
1. python manage.py makemigrations
2. python manage.py migrate
3. python manage.py runserver

If no errors occur you'll get a link in your terminal like this: http://127.0.0.1:8000/
* Follow the link or open it using any browser and you'll have this project up and running in your device.
* Follow the description.md file for using the project.
