# React Blog CMS

## About

This app allows users to read and write blog posts. To submit new posts or edit already existing posts users must register an account and log in.

## Stack

- React - a JavaScript library for building user interfaces
- Redux - a predictable state container for JavaScript apps
- Express - a Node.js web application framework
- MongoDB - a cross-platform document-oriented database program

## Setup

#### .env file
You will need a .evn file to hold environment variables which will point the backend to an instance of MongoDB.

Change the .env-example file to .env and use the example to supply your own MongoDB URI information.

#### MongoDB database

This project was developed using a free sandbox database instance provided by [Mlab](https://mlab.com/). Create a username/password and a free sandbox instance to get a database URI to enter into the .env file.

## Usage

#### To get and install dependencies

Clone this project to a local directory and run:

```bash
npm install
```
This creates the node_modules folder and installs the project dependencies in the folder.

#### Running the application

Run both dev-client and dev-server:

- The dev-client is a webpack-dev-server which serves the react/redux bundle.js

```bash
npm run dev-client
```
- The dev-server hosts the backend rest API and manages the database.

```bash
npm run dev-server
```
The site can be viewed locally at localhost:3000. <br/>
