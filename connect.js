
/* This is where it comes from: https://www.youtube.com/watch?v=z0Cm6xDQNt0&ab_channel=Codingflag */

/*What is this */
const express require 'express';

const app = express();

/*The important part */

const mysql = require("mysql");

/* Creating a Connection */

const con = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"password",
  database:"dbname"
});

con.connect(function(error){
  if(error){
    console.log("Database Connection Failed");
  }
})