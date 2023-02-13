# Babul Keyer

Group Members

[Amanuel Yihune  - UGR/8408/13 - Sec 1](https://github.com/amanyih) <br/>
[Elisur Freyesus - UGR/8806/13 - Sec 4](https://github.com/elizura) <br/>
[Merwan Juneydi  - UGR/0816/13 - Sec 2](https://github.com/Merwan-J) <br/>
[Natnael Abebaw  - UGR/7747/13 - Sec 1](https://github.com/natttygoog) <br/>
[Rahel Solomon   - UGR/9946/13 - Sec 3](https://github.com/ritasol) <br/>



# BABULKEYER

This repository contains code for babul keyer admin dashboard and babul keyer website built with bootstrap. The dashboard uses JWT token-based authentication to secure access to access of the site. Both sites consume the REST API using the Fetch API.
##CRUD
Create: on the dashboard, an approved admin can create content for the main site on different pages.
Read: the backend reads content from our database and feeds it to both the dashboard and the main site.
Update: an admin can delete content from the site. For example, we can update the hero section of the home page, and we can grant access to another admin from the dashboard which will update their status.
Delete: the content can also be deleted and an admin’s access can be revoked.

# Getting Started.
We have set up Enviorment variables so that the our Backend can run on locally on any devices. 

To get started, clone the repository and install the necessary dependencies. You can then start the development server using the following command:
                      
                      npm run start:dev

This will start a local server on specified port in configuration which is http://localhost:3000 where you can access the admin dashboard.
To get access first you have to sign up and wait until you are approved. If you want to get access to the dashboard you can use the following credentials.
	
		      Username: admin
		      Password: admin

You can find the link to the dashboard on the Frontend directory “admin-index.html” 

		      http://localhost:3000/FrontEnd/admin-index.html.
		      
The main site’s link can be found on the frontend directory “index.html”

		      http://localhost:3000/FrontEnd/index.html

# Database
For storage, we used MongoDB due to its flexibility and scalability. It’s has also supports different languages making it very accessible to developers who have different skillset, it makes it an ideal storage solution when working with a team. It’s ability to handle large volumes of data and perform analytics concurrently made it our choice. Additionally, since we don’t have too many relations in our schema it was not necessary to use a relational database.

