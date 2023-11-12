# CRM API Nodejs app
This app is a web application that uses the Node.js runtime environment and the Express framework to create a RESTful API for managing customer relationships. The app allows users to write and manage their articles, which are organized into categories. The app also supports user authentication and authorization, so that different users can have different roles and permissions to access and modify the data. The app uses a SQL database to store the customer, article, category, and user information. The app also uses various middleware functions to handle tasks such as logging, error handling, validation, and authentication.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You will need to install npm modules for running this app.
```
npm i
```
or 
```
npm install
```

### Installing
Then you need to start your SQL database and after that you're ready to start the project.

```
npm start
```
![Annotation 2023-11-11 213025](https://github.com/sadrakha/Crm-Nodejs-MySQL/assets/67289381/a6f7b970-6792-4eb6-a64e-eea32979aff5)

## Running the tests

Now you can run this project on your Postman.

For example for signUp you should use :

```
localhost:3001/signUp
```
inputs you need:
```
userName
email
password
comfirmPass
profile
```
or if you already have an user:
```
localhost:3000/logIn
```
![Annotation 2023-11-11 214827](https://github.com/sadrakha/Crm-Nodejs-MySQL/assets/67289381/7c201de0-48f2-4b3c-a4ca-f8f186b7ce39)

For other routs you have to be login in your postman by coping your token and past it in token input in Authorization tab wile your type is Bearer Token:
![Annotation 2023-11-11 215608](https://github.com/sadrakha/Crm-Nodejs-MySQL/assets/67289381/1c8e06c4-375a-4082-92e2-42d98d986a1e)
## Other Routs
For user management:

```
localhost:3000/deleteUser/(your user id)
localhost:3000/editUser/(your user id)
```

For visiting your profile:

```
localhost:3000/profile/(your user id)
```

For managing permissions:
```
localhost:3000/admin/permission/add
 ```

```
localhost:3000/admin/permission/edit/(permission id)
```

input you need:
```
title
```
For managing roles:

```
localhost:3000/admin/role/add 
```
```
localhost:3000/admin/role/edit/(role id)
```
inputs you need:

```
title
permissionId
```
For managing articles category:

```
localhost:3000/admin/category/add
localhost:3000/admin/category/edit/:id
localhost:3000/admin/category/delete/:id
```
inputs you need:

```title```

For managing articles subcategory:
```
localhost:3000/admin/subCategory/add
localhost:3000/admin/subCategory/edit/:id
localhost:3000/admin/subCategory/delete/:id
```
inputs you need:
```
title 
categoryId
```
For managing articles:
```
localhost:3000/admin/article/createArticle
localhost:3000/admin/article/edit/:id
localhost:3000/admin/subCategory/article/delete/:id
```
inputs you need:
```
title
description
status
subCategoryId
```

## Built With

* Nodejs
* express
* SQL

